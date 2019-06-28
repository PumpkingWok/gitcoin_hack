import React, { Component } from 'react';
import './Login.css';

const loginElement = (
  <form className='loginform'>
    <input type="text" placeholder='username'/>
    <input type="password" placeholder='password'/>
    <input type="submit"/>
    <button>
      Facebook
    </button>
    <button>
      twitter
    </button>
    <button>
      gmail
    </button>
  </form>
);
class Login extends Component {
  render() {
    return (
      loginElement
    );
  }
}

export default Login;
