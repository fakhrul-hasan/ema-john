import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    createUser(email, password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error=>{
      console.error(error);
    })
    setError('');
    if (password !== confirm) {
      setError("Password did not match")
      return;
    } else if (password.length < 6) {
      setError("Password should be at least 6 characters long")
      return;
    }
  };
  return (
    <div className="form-container">
      <h3 className="form-title">Sign Up</h3>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      <p>
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>
      </form>
        <p className="txt-error">{error}</p>
    </div>
  );
};

export default SignUp;
