/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterAuthDTO {
  @IsNotEmpty()
  @ApiProperty({ nullable: false, type: String })
  name: string;

  @IsEmail({}, { message: 'Email must be valid' })
  @IsString()
  @ApiProperty({ nullable: false, type: String })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ nullable: false, type: String })
  password: string;
}
