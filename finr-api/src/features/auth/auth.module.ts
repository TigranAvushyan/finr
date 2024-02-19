import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/features/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import {
  ACCESS_EXPIRATION_TIME,
  jwtConstants,
} from '../../shared/config/jwt.config';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: ACCESS_EXPIRATION_TIME },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
