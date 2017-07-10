class DbConnection {
  static getBookings(callback = () => {}) {
    fetch('/bookings')
      .then(response => response.json())
      .then(callback);
  }
}

export default DbConnection;
