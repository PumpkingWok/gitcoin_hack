import React, { Component } from "react";
import "./Options.css";

class Options extends Component {
  render() {
    return (
      <div>
        <div className='hero'>
          <p>Hello Kevin,</p>
          <h2 className='greeting'>Good morning!</h2>
        </div>
        <div className='home__options'>
          <div className='options'>
            <a href='/campaign'><div className='badge'>
              <div className='badge__points one'></div>
              <p className='badge__type'>PAPER</p>
            </div></a>
            <a href='/campaign'><div className='badge'>
              <div className='badge__points two'></div>
              <p className='badge__type'>PLASTIC</p>
            </div></a>
            <a href='/campaign'><div className='badge'>
              <div className='badge__points three'></div>
              <p className='badge__type'>FABRIC</p>
            </div></a>
            <a href='/campaign'> <div className='badge'>
              <div className='badge__points four'></div>
              <p className='badge__type'>METAL</p>
            </div></a>
            <a href='/campaign'><div className='badge'>
              <div className='badge__points five'></div>
              <p className='badge__type'>GLASS</p>
            </div></a>
            <a href='/campaign'><div className='badge'>
              <div className='badge__points six'></div>
              <p className='badge__type'>COMPOST</p>
            </div></a>
            <a href='/campaign'><div className='badge'>
              <div className='badge__points seven'></div>
              <p className='badge__type'>AHP</p>
            </div></a>
            <a href='/campaign'><div className='badge'>
              <div className='badge__points eight'></div>
              <p className='badge__type'>BATTERY</p>
            </div></a>
          </div>
        </div>
        <div className='calltoaction'>
          <a href='/new-campaign'><button className='donebutton'>Start New Campaign</button></a>
        </div>
        <hr/>
        <div className='newsfeed'>
          <div className='news'>
            <h4>News feed title</h4>
            <p>Here is your news feed text.</p>
          </div>
          <div className='news'>
            <p>News feed title</p>
            <p>Here is your news feed text.</p>
          </div>
          <div className='news'>
            <p>News feed title</p>
            <p>Here is your news feed text.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Options;
