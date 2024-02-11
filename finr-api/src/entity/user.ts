import { DataTypes } from 'sequelize';
import { db } from '../config/data-base/db';

export const User = db.define('user', {
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
});
