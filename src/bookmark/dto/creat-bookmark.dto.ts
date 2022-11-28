import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatBookmarkDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  link: string;
}
