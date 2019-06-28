import React, { Component } from 'react';
import './Settings.css';
import can from './done.png';

class Settings extends Component {
  render() {
    return (
      <div class='done'>
        <img src={can} alt='can'/>
        <p>Thank you for your contribution!</p>
        <button className='donebutton'>Done</button>
      </div>
    );
  }
}

export default Settings;
