import React, { useState } from 'react';
import axios from 'axios';

function Login() {

/*useState hook is used to add state(data specific to an instance of comp) to this component
hooks add functionality to our component
userID and password are used to hold the user input for login credentials,
while authenticated holds the authentication status fetched from the localStorage
localStorage is a built-in web storage object in web browsers that allows websites 
to store key-value pairs locally within a user's browser*/

  const [userID, setUserID] = useState('');//user id is a piece of state and setuserid will change it ,  '':no initial value
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem('authenticated') || false)
  );

  const gotohome = async () => {
    // try {
    //   const response = await axios.post(
    //     'http://localhost:8080/esd-1.0-SNAPSHOT/api/employee/employeeLogin',
    //     {
    //       userId: userID,
    //       password: password,
    //     }
    //   );

    //   if (response.status !== 200) {
    //     alert('INVALID LOGIN\nPlease click OK');
    //     // Do something here on invalid login
    //   } else {
        setAuthenticated(true);
        window.location.replace('home');
    //   }
    // } catch (e) {
    //   alert('Connection Error !!!');
    // }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <h3 className="mb-3">Login by Admin Department</h3>
            <hr />
            <div className="mb-3">
              <label htmlFor="loginId" className="form-label">
                Login ID
              </label>
              <input
                type="text"
                className="form-control"
                id="loginId"
                placeholder="Enter loginId"
                onChange={(e) => setUserID(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => gotohome()}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
