import { PrismaService } from '../prisma/prisma.service';
import { CreatBookmarkDto, UpdateBookmarkDto } from './dto';
import { BookMark } from '@prisma/client';
export declare class BookmarkService {
    private prisma;
    constructor(prisma: PrismaService);
    createBookmark(userId: number, bookmarkDto: CreatBookmarkDto): Promise<BookMark>;
    getAllBookmarks(userId: number): Promise<BookMark[]>;
    getSingleBookmark(userId: number, bookMarkId: number): Promise<BookMark>;
    updateBookmark(userId: number, bookMarkId: number, bookmarkDto: UpdateBookmarkDto): Promise<BookMark | Error>;
    deleteBookmark(userId: number, bookMarkId: number): Promise<BookMark | Error>;
}
