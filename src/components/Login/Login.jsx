import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {logIn} = useContext(AuthContext);
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
    })
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <div className="form-container">
      <h3 className="form-title">Login</h3>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p><small>New to Ema-john? <Link to='/signUp'>Create New Account</Link></small></p>
    </div>
  );
};

export default Login;
