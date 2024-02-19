import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiParam, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/features/auth/auth.guard';
import { UserUpdateDto } from './dto/user.update.dto';
import { UserIdName } from './user.type';
import { UsersService } from './users.service';
import { User } from 'src/shared/user/user.decorator';
import {
  ApiOkPaginatedResponse,
  ApiPaginationQuery,
  PaginateQuery,
} from 'nestjs-paginate';
import { UserEntity } from './users.entity';
import { USER_PAGINATION_CONFIG } from './user-pagination.config';

@ApiTags('users')
@Controller('users')
@ApiSecurity('bearer')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOkPaginatedResponse(UserEntity, USER_PAGINATION_CONFIG)
  @ApiPaginationQuery(USER_PAGINATION_CONFIG)
  findAll(@Query() query: PaginateQuery) {
    return this.usersService.findAll(query);
  }

  @Get('me')
  findMe(@User() user: UserIdName) {
    return this.usersService.findOne(user.id);
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Patch('me')
  updateUser(@User() user: UserIdName, @Body() newUser: UserUpdateDto) {
    return this.usersService.updateUser(user.id, newUser);
  }
}
