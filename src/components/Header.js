import React, { Component } from 'react';
import Countdown from '../containers/Countdown';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <h1>Oliver and Rizchel are getting married in...</h1>
        <Countdown />
        <h1>4.19.2019</h1>
      </div>
    );
  }
}
export default Header;
