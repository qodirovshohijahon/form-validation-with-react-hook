import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    if (
      data.email === loginInfo.username &&
      data.password === loginInfo.password
    ) {
      alert("Logged in successfully");
    } else {
      alert("Invalid username or password");
    }
  };

  const loginInfo = {
    username: "username@test.com",
    password: "testtest"
  };
  return (
    <>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label for="email">Email addres</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                ref={register({ required: true})}
              />
              {errors.email && (
                <div className="text-danger">Email is a requierd field</div>
              )}
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input 
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                ref={register({ required: true})}
              />
              {errors.password && (
                <div className="text-danger"> Password is a required field</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              submit
            </button> 
          </form>
      </div>
    </div>
    </>


  );
}

export default App;
