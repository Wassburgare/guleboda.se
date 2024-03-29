const noop = () => {};

class DbConnection {
  static getBookings(callback = noop) {
    fetch('/bookings')
      .then(response => response.json())
      .then(callback);
  }

  static createBooking(week, year, callback = noop) {
    fetch('/bookings', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        week,
        year,
        type: 'create',
      }),
    }).then(
      response => response.json(),
    ).then(callback);
  }

  static deleteBooking(week, year, callback = noop) {
    fetch('/bookings', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        week,
        year,
        type: 'delete',
      }),
    }).then(
      response => response.json(),
    ).then(callback);
  }

  static login(email, password, rememberMe, callback = noop) {
    fetch('/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        remember_me: rememberMe,
      }),
    }).then(
      response => response.json(),
    ).then(callback);
  }

  static auth(callback = noop) {
    fetch('/auth', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      response => response.json(),
    ).then(callback);
  }
}

export default DbConnection;
