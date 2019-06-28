import React, { Component } from 'react';
import './Education.css';
import scanQR from './scan-qr.png';

class Education extends Component {
  render() {
    return (
        <div class='scanqr'>
            <img src={scanQR} alt='scancode'/>
            <p>Line up the container QR code to scan it with your device's camera.</p>
        </div>
    );
  }
}

export default Education;
