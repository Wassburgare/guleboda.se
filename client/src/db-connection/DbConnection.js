class DbConnection {
  static getBookings(callback = () => {}) {
    fetch('/bookings')
      .then((response) => {
        return response.json();
      })
      .then(callback);
  }
}

export default DbConnection;
