"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookmarkService = class BookmarkService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBookmark(userId, bookmarkDto) {
        return await this.prisma.bookMark.create({
            data: Object.assign(Object.assign({}, bookmarkDto), { user_id: userId }),
        });
    }
    async getAllBookmarks(userId) {
        return await this.prisma.bookMark.findMany({
            where: { user_id: userId },
        });
    }
    async getSingleBookmark(userId, bookMarkId) {
        return await this.prisma.bookMark.findFirst({
            where: { id: bookMarkId, user_id: userId },
        });
    }
    async updateBookmark(userId, bookMarkId, bookmarkDto) {
        const bookMark = await this.getSingleBookmark(userId, bookMarkId);
        if (bookMark.id !== bookMarkId || bookMark.user_id !== userId) {
            return new common_1.ForbiddenException(`No access for this action!`);
        }
        return await this.prisma.bookMark.update({
            where: { id: bookMarkId },
            data: Object.assign({}, bookmarkDto),
        });
    }
    async deleteBookmark(userId, bookMarkId) {
        const bookMark = await this.getSingleBookmark(userId, bookMarkId);
        if (!bookMark) {
            return new common_1.NotFoundException(`Bookmark with ${bookMarkId} id does not exist!`);
        }
        return await this.prisma.bookMark.delete({
            where: { id: bookMarkId },
        });
    }
};
BookmarkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookmarkService);
exports.BookmarkService = BookmarkService;
//# sourceMappingURL=bookmark.service.js.map