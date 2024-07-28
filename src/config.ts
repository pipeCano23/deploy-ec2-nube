import * as dotenv from 'dotenv';
dotenv.config();

console.log('Database Host:', process.env.DB_HOST);

export const config = {
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};
