import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserCreateDto } from 'src/features/users/dto/user.create.dto';
import { UsersService } from '../users/users.service';
import { Jwt, JwtPayload } from './auth.type';
import { REFRESH_EXPIRATION_TIME } from '../../shared/config/jwt.config';
import { verifyPassword } from '../../shared/utils/password';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(username: string, pass: string): Promise<Jwt> {
    const user = await this.userService.findOneByUsername(username);
    if (verifyPassword(pass, user.password)) {
      throw new UnauthorizedException();
    }

    return this.generateToken({
      sub: user.id,
      username: user.username,
    });
  }

  async createUser(user: UserCreateDto): Promise<Jwt> {
    const newUser = await this.userService.createUser(user);

    return this.generateToken({
      sub: newUser.id,
      username: newUser.username,
    });
  }

  async refresh(refreshToken: string) {
    const payload = this.jwtService.decode(refreshToken);
    const user = await this.userService.findOne(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.generateToken({
      sub: user.id,
      username: user.username,
    });
  }

  private generateToken(payload: JwtPayload) {
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: REFRESH_EXPIRATION_TIME,
      }),
    };
  }
}
