import bcrypt from 'bcrypt';

const PASSWORD_SALT = 10;

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, PASSWORD_SALT);
};

export const verifyPassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
