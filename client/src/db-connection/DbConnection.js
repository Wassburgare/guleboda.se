import request from 'request';

class DbConnection {
  static getBookings(callback = () => {}) {
    request('http://localhost:8080/bookings', (error, response, body) => {
      callback(JSON.parse(body));
    });
  }
}

export default DbConnection;
