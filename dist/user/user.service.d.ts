import { PrismaService } from '../prisma/prisma.service';
import { UpdateDto } from './dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    updateUserProfile(userId: number, updateDto: UpdateDto): Promise<import(".prisma/client").User>;
}
