import { Sequelize } from 'sequelize';

console.log(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST);

export const db = new Sequelize({
  database: process.env.DB_SCHEMA || 'postgres',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
});
