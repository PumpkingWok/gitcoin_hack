import React, { Component } from 'react';
import './Header.css';
// import hamburger from './hamburger.png';
// import option from './option.png';
import { ReactComponent as HomeGrey } from './icons/home-grey.svg';
import { ReactComponent as HomeBlue } from './icons/home-color.svg';
import { ReactComponent as ProfileGrey } from './icons/my-campaign-grey.svg';
import { ReactComponent as ProfileColor } from './icons/my-campaign-color.svg';
import { ReactComponent as NotificationGrey } from './icons/notification-grey.svg';
import { ReactComponent as NotificationColor } from './icons/notification-color.svg';
import { ReactComponent as SettingGrey } from './icons/setting-grey.svg';
import { ReactComponent as SettingColor } from './icons/setting-color.svg';
import { ReactComponent as EducationGrey } from './icons/info-grey.svg';
import { ReactComponent as EducationColor } from './icons/info-color.svg';

class Header extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isOpen: false
  //   }
  //   this._openMenu = this._openMenu.bind(this);
  // }
  // _openMenu(e) {
  //   e.preventDefault();
  //   this.setState(prevState => ({isOpen: !prevState.isOpen}));
	// 	if(this.state.isOpen === false) {
	// 		document.getElementById('navigation').style.display = 'none';
	// 	} else {
	// 		document.getElementById('navigation').style.display = 'block';			
	// 	}
  // }
  render() {
    return (
        <header>
          <nav className='navigation' id='navigation'>
            <ul className='navigation__list'>
              <li className='navigation__item'><a href='/' className='navigation__link'><HomeGrey/></a></li>
              <li className='navigation__item'><a href='/campaign' className='navigation__link'><NotificationGrey /></a></li>
              <li className='navigation__item'><a href='/profile' className='navigation__link'><ProfileGrey /></a></li>
              <li className='navigation__item'><a href='/education' className='navigation__link'><EducationGrey /></a></li>
              <li className='navigation__item'><a href='/settings' className='navigation__link'><SettingGrey /></a></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
