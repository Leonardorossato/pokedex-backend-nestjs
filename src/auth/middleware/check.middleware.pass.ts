/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckPassword {
  async hashPassword(password: string, saltOrRouds: number): Promise<string> {
    saltOrRouds = 10;
    return await bcrypt.hash(password, saltOrRouds);
  }
}
