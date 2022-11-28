import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateDto {
  @IsEmail()
  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;
}
