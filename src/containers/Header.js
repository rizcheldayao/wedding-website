import React, { Component } from 'react';
import Countdown from './Countdown';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <h1>Oliver and Rizchel are getting married in...</h1>
        <Countdown />
      </div>
    );
  }
}
export default Header;
