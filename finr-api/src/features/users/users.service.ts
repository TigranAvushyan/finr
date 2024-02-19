import { hashPassword } from '../../shared/utils/password';
import { Injectable, Logger } from '@nestjs/common';
import { UserUpdateDto } from './dto/user.update.dto';
import { UserEntity } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDto } from './dto/user.create.dto';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { USER_PAGINATION_CONFIG } from './user-pagination.config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  private readonly logger = new Logger(UsersService.name);

  async findAll(options: PaginateQuery): Promise<Paginated<UserEntity>> {
    this.logger.log('Find all users');
    return paginate(options, this.usersRepository, USER_PAGINATION_CONFIG);
  }

  async findOne(id: number): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findOneByUsername(username: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async createUser({
    password: pass,
    ...user
  }: UserCreateDto): Promise<UserEntity> {
    return this.usersRepository.save({ ...user, password: hashPassword(pass) });
  }

  async updateUser(id: number, user: UserUpdateDto): Promise<UserEntity> {
    const res = await this.usersRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set(user)
      .where('id = :id', { id })
      .returning('*')
      .execute();
    return res.raw[0];
  }
}
