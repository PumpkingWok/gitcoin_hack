import React, { Component } from 'react';
import './Splash.css';
import logo from './splash.png';

class Splash extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='splash'>
                <a href='/'><img src={logo} alt='logo'/></a>
            </div>
        );
    }
}

export default Splash;
