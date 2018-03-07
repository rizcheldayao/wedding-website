import React, { Component } from 'react';
import Header from '../components/Header';
import Navigation from './Navigation';
import About from './About';
import Wedding from '../components/Wedding';
import Gallery from '../components/Gallery';
import Travel from '../components/Travel';

class Layout extends Component {
  constructor (props) {
    super(props)
    const navOptions = ['About', 'Wedding', 'Gallery', 'Travel'];
    const url = window.location.href;
    let pathname = 'About';
    if (url.indexOf('#') !== -1) {
      const urlString = url.split('#');
      pathname = urlString[urlString.length - 1];
    }
    this.state = {
      selectedNav: pathname,
      navOptions: navOptions,
    }
    this.setNav = this.setNav.bind(this);
  }

  setNav (e) {
    const selectedOption = e.target.innerHTML;
    this.setState({
      selectedNav: selectedOption,
    });
  }

  render () {
    const { navOptions, selectedNav } = this.state;
    return (
      <div className='layout'>
        <Header />
        <Navigation setNav={this.setNav} navOptions={navOptions} />
        {selectedNav === 'About' && <About />}
        {selectedNav === 'Wedding' && <Wedding />}
        {selectedNav === 'Gallery' && <Gallery />}
        {selectedNav === 'Travel' && <Travel />}
        {/* <Footer /> */}
      </div>
    );
  }
}
export default Layout;
