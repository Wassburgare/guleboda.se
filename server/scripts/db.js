const program = require('commander');
const readline = require('readline');
const actions = require('./actions');
const bookshelf = require('../src/bookshelf');

program
  .option('-R --reset', 'Reset all tables')
  .option('--reset-bookings', 'Reset bookings table')
  .option('--reset-users', 'Reset users table')
  .option('--reset-sessions', 'Reset sessions table')
  .option('-u --create-user', 'Create a new admin user')
  .option('-b --create-booking', 'Book a week')
  .parse(process.argv);

const resets = [];

if (program.reset !== undefined) {
  program.resetBookings = program.resetUsers = program.resetSessions = true;
}

if (program.resetBookings !== undefined) {
  resets.push(actions.resetBookings);
  console.log('Reset bookings');
}

if (program.resetUsers !== undefined) {
  resets.push(actions.resetUsersTable);
  console.log('Reset users');
}

if (program.resetSessions !== undefined) {
  resets.push(actions.resetSessionsTable);
  console.log('Reset sessions');
}

if (resets.length > 0) {
  Promise.all(resets).then(() => {
    console.log('Done');
    bookshelf.knex.destroy(bookshelf);
  })
}

let rl;
let inputs = [];

if (program.createUser !== undefined || program.createBooking !== undefined) {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

if (program.createUser !== undefined) {
  const createUser = (r1) => {
    rl.question('Enter an email address: ', (email) => {
      rl.question('Enter a password: ', (password) => {
        actions.createUser(email, password);
      });
    });
  }

  inputs.push(createUser);
}

if (program.createBooking !== undefined) {
  inputs.push((rl) => {
    rl.question('Enter a week: ', (week) => {
      rl.question('Enter a year: ', (year) => {
        actions.createBooking(week, year);
      });
    });
  });
}

console.log(inputs);

for (let i = 0; i < inputs.length; i++) {
  inputs[i](rl);
}

rl.close();
