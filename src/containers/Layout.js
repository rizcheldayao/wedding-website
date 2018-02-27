import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';

class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <Header />
        <Navigation />
      </div>
    );
  }
}
export default Layout;
