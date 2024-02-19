import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((_, req) => {
  return req.args[0].user;
});
