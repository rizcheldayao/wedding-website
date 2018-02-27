import React, { Component } from 'react';
import Header from './Header';
import Navigation from '../components/Navigation';
import About from '../components/About';

class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <Header />
        <Navigation />
        <About />
      </div>
    );
  }
}
export default Layout;
