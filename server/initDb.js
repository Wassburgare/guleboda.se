const bookshelf = require('./bookshelf');

bookshelf.knex.schema.dropTableIfExists('bookings')
  .then(() => {
    console.log('Table "bookings" dropped');
    return bookshelf.knex.schema.createTable('bookings', (table) => {
      table.increments();
      table.integer('week');
      table.integer('year');
      table.unique(['week', 'year']);
    });
  })
  .then(() => {
    console.log('Table "bookings" created');
    bookshelf.knex.destroy(bookshelf);
  });
