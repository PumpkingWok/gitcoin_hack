import React, { Component } from 'react';
import { MetaMaskButton, Field, Select, Slider } from 'rimble-ui';
import './Campaign.css';
import locations from './campaigns.json';

class NewCampaign extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
          <div>
            <div className='hero'>
              <p>Hello Kevin,</p>
              <h2 className='greeting'>New Campaign</h2>
              <MetaMaskButton.Outline>
                Connect With MetaMask
              </MetaMaskButton.Outline>
            </div>
          </div>
        )
    }
    
}
export default NewCampaign;
