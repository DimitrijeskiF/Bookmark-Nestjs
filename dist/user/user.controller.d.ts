import { User } from '@prisma/client';
import { UpdateDto } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(user: User): User;
    updateUser(userId: number, updateDto: UpdateDto): Promise<User>;
}
