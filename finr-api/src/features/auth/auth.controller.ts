import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserCreateDto } from 'src/features/users/dto/user.create.dto';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth.login.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthRefreshDto } from './dto/auth.refresh.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: AuthLoginDto) {
    return this.authService.singIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() user: UserCreateDto) {
    return this.authService.createUser(user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  refresh(@Body() body: AuthRefreshDto) {
    return this.authService.refresh(body.refreshToken);
  }
}
