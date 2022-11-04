/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterAuthDTO {
  @IsNotEmpty()
  @ApiProperty({ nullable: false, type: String })
  @MinLength(3)
  @MaxLength(200)
  name: string;

  @IsEmail({}, { message: 'Email must be valid' })
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  @ApiProperty({ nullable: false, type: String })
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(200)
  @ApiProperty({ nullable: false, type: String })
  password: string;
}
