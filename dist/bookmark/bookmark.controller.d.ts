import { User } from '@prisma/client';
import { CreatBookmarkDto, UpdateBookmarkDto } from './dto';
import { BookmarkService } from './bookmark.service';
export declare class BookmarkController {
    private bookmarkService;
    constructor(bookmarkService: BookmarkService);
    createBookmark(user: User, creatBookmarkDto: CreatBookmarkDto): Promise<import(".prisma/client").BookMark>;
    getAllBookmarks(user: User): Promise<import(".prisma/client").BookMark[]>;
    getSingleBookmark(id: number, user: User): Promise<import(".prisma/client").BookMark>;
    updateBookmark(id: number, updateBookmarkDto: UpdateBookmarkDto, user: User): Promise<import(".prisma/client").BookMark | Error>;
    deleteBookmark(id: number, user: User): Promise<import(".prisma/client").BookMark | Error>;
}
