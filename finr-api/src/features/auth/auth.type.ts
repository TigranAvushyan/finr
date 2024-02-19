export interface JwtPayload {
  username: string;
  sub: number;
}

export interface Jwt {
  accessToken: string;
  refreshToken: string;
}
