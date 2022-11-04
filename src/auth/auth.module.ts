import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TrainersModule } from '../trainers/trainers.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LocalAuthGuard } from './guards/local.guard';
import { JwtStrategy } from './strategy/jwt.strategy';
import { CheckPassword } from './middleware/check.middleware.pass';
@Module({
  imports: [
    TrainersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: process.env.JWT_SECRET as string,
        signOptions: { expiresIn: '1d', algorithm: 'HS384' },
        verifyOptions: {
          algorithms: ['HS384'],
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalAuthGuard, JwtStrategy, CheckPassword],
  exports: [AuthService],
})
export class AuthModule {}
