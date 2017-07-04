const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'admin',
    database : 'guleboda.se'
  }
});
module.exports = require('bookshelf')(knex);
