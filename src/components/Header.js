import React, { Component } from 'react';
import Countdown from '../containers/Countdown';
import EngagementPic from '../images/engagement.jpg';
import Data from '../data/data.json';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <img src={EngagementPic} />
        <div className='header-details'>
          <h1>{Data.headerTitle}</h1>
          <Countdown />
          <h1>{Data.headerDate}</h1>
        </div>
      </div>
    );
  }
}
export default Header;
