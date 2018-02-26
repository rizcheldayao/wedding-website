import React, { Component } from 'react';
import Countdown from '../components/Countdown';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        Oliver and Rizchel are getting married in...
        <Countdown />
      </div>
    );
  }
}
export default Header;
