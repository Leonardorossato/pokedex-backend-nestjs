/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthLoginDTO {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  password: string;
}
