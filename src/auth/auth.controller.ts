import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dto/auth.login.dto';
import { LoginInterface } from './interface/Ilogin.interface';
import { RegisterAuthDTO } from './dto/auth.register.dto';
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() dto: AuthLoginDTO): Promise<LoginInterface> {
    return await this.authService.loginCredentials(dto);
  }

  @Post('/register')
  async register(@Body() dto: RegisterAuthDTO): Promise<any> {
    return await this.authService.registerCredentials(dto);
  }
}
