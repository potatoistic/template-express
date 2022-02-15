import dotenv from 'dotenv';
import { env } from '@utils/env-helper';

// Configure dotenv
dotenv.config();

// Export the config
const ENV = {
  NODE_PORT: process.env.PORT || 3000,
  NODE_ENV: env.node_env,
  mysql: {
    host: env.string('MYSQL_HOST', 'localhost'),
    port: env.number('MYSQL_PORT', 3306),
    user: env.string('MYSQL_USER', 'root'),
    password: env.string('MYSQL_PASSWORD', ''),
    database: env.string('MYSQL_DATABASE', 'template'),
    ssl: env.boolean('MYSQL_SSL', false),
    pool: {
      min: env.number('MYSQL_POOL_MIN', 0),
      max: env.number('MYSQL_POOL_MAX', 10),
    },
  },
};

export default ENV;
