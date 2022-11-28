import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatBookmarkDto, UpdateBookmarkDto } from './dto';
import { BookMark } from '@prisma/client';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async createBookmark(
    userId: number,
    bookmarkDto: CreatBookmarkDto,
  ): Promise<BookMark> {
    return await this.prisma.bookMark.create({
      data: {
        ...bookmarkDto,
        user_id: userId,
      },
    });
  }

  async getAllBookmarks(userId: number): Promise<BookMark[]> {
    return await this.prisma.bookMark.findMany({
      where: { user_id: userId },
    });
  }

  async getSingleBookmark(
    userId: number,
    bookMarkId: number,
  ): Promise<BookMark> {
    return await this.prisma.bookMark.findFirst({
      where: { id: bookMarkId, user_id: userId },
    });
  }

  async updateBookmark(
    userId: number,
    bookMarkId: number,
    bookmarkDto: UpdateBookmarkDto,
  ): Promise<BookMark | Error> {
    const bookMark: BookMark = await this.getSingleBookmark(userId, bookMarkId);

    if (bookMark.id !== bookMarkId || bookMark.user_id !== userId) {
      return new ForbiddenException(`No access for this action!`);
    }

    return await this.prisma.bookMark.update({
      where: { id: bookMarkId },
      data: {
        ...bookmarkDto,
      },
    });
  }

  async deleteBookmark(
    userId: number,
    bookMarkId: number,
  ): Promise<BookMark | Error> {
    const bookMark: BookMark = await this.getSingleBookmark(userId, bookMarkId);

    if (!bookMark) {
      return new NotFoundException(
        `Bookmark with ${bookMarkId} id does not exist!`,
      );
    }

    return await this.prisma.bookMark.delete({
      where: { id: bookMarkId },
    });
  }
}
