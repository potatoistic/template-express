import Knex from 'knex';
import ENV from './dotenv';

const { mysql } = ENV;

const knex = Knex({
  client: 'mysql2',
  connection: {
    host: mysql.host,
    port: mysql.port,
    user: mysql.user,
    password: mysql.password,
    database: mysql.database,
    pool: mysql.pool,
  },
});

export default knex;
