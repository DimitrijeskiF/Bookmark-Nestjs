import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard';
import { User } from '@prisma/client';
import { CreatBookmarkDto, UpdateBookmarkDto } from './dto';
import { BookmarkService } from './bookmark.service';

@UseGuards(JwtGuard)
@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Post('')
  createBookmark(
    @GetUser() user: User,
    @Body() creatBookmarkDto: CreatBookmarkDto,
  ) {
    return this.bookmarkService.createBookmark(user.id, creatBookmarkDto);
  }

  @Get()
  getAllBookmarks(@GetUser() user: User) {
    return this.bookmarkService.getAllBookmarks(user.id);
  }

  @Get(':id')
  getSingleBookmark(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ) {
    return this.bookmarkService.getSingleBookmark(user.id, id);
  }

  @Patch(':id')
  updateBookmark(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookmarkDto: UpdateBookmarkDto,
    @GetUser() user: User,
  ) {
    return this.bookmarkService.updateBookmark(user.id, id, updateBookmarkDto);
  }

  @Delete(':id')
  deleteBookmark(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.bookmarkService.deleteBookmark(user.id, id);
  }
}
