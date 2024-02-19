import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;
}
