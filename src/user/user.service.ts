import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateUserProfile(userId: number, updateDto: UpdateDto) {
    const { email, firstName, lastName } = updateDto;
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
        email,
      },
    });

    delete user.hash;
    return user;
  }
}
