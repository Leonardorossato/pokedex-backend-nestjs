import { ApiProperty } from '@nestjs/swagger';
import { MinLength, MaxLength, IsString } from 'class-validator';

export class CreateTrainerDTO {
  @ApiProperty({ nullable: false, minLength: 3, maxLength: 200 })
  @MinLength(3)
  @IsString()
  @MaxLength(200)
  name: string;

  @ApiProperty({ nullable: false, minLength: 3, maxLength: 200 })
  @MinLength(3)
  @IsString()
  @MaxLength(200)
  email: string;

  @ApiProperty({ nullable: false, minLength: 3, maxLength: 200 })
  @MinLength(3)
  @IsString()
  @MaxLength(200)
  password: string;
}
