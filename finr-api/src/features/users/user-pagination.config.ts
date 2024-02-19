import { PaginateConfig } from 'nestjs-paginate';
import { UserEntity } from './users.entity';

export const USER_PAGINATION_CONFIG: PaginateConfig<UserEntity> = {
  sortableColumns: ['id', 'username'],
};
