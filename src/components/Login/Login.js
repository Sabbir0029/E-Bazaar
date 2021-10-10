import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div>
        <h1>Login</h1>
        <form>
        <input type="user" />
        <br />
        <input type="password"/>
        <br />
        <input type="submit" value="Submit"/>
        </form>
        <p>New to E Bazaar? <Link to='ragister'>Create Account</Link></p>
        <div>...........Or.............</div>
        <button className='btn-regular'>Google login</button>
      </div>
    </div>
  );
};

export default Login;