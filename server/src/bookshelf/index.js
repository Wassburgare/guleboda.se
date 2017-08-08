import knexModule from 'knex';
import bookshelfModule from 'bookshelf';

const knex = knexModule({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'admin',
    database : 'guleboda.se'
  }
});

export default bookshelfModule(knex);
