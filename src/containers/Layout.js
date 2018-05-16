import React, { Component } from 'react';
import Header from '../components/Header';
import Navigation from './Navigation';
import About from './About';
import Wedding from '../components/Wedding';
import Gallery from '../components/Gallery';
import Travel from '../components/Travel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

class Layout extends Component {
  constructor (props) {
    super(props)
    const navOptions = ['About', 'Wedding', 'Gallery', 'Travel'];
    this.state = {
      selectedNav: 'About',
      navOptions: navOptions,
      imagesLoaded: 0,
      totalImages: 15,
    }
    this.setNav = this.setNav.bind(this);
    this.addImages = this.addImages.bind(this);
  }

  setNav (e) {
    const selectedOption = e.target.innerHTML;
    this.setState({
      selectedNav: selectedOption,
    });
  }

  addImages () {
    const { imagesLoaded } = this.state;
    this.setState({
      imagesLoaded: imagesLoaded + 1,
    })
  }

  render () {
    const { navOptions, selectedNav, imagesLoaded, totalImages } = this.state;
    return (
      <div className='layout'>
        <div style={imagesLoaded >= totalImages ? { display: 'none' } : { display: 'block' }}>
          <Loading />
        </div>
        <div style={imagesLoaded >= totalImages ? { display: 'block' } : { display: 'none' }}>
          <Header addImages={this.addImages} />
          <Navigation setNav={this.setNav} navOptions={navOptions} />
          {selectedNav === 'About' && <About addImages={this.addImages} />}
          {selectedNav === 'Wedding' && <Wedding />}
          {selectedNav === 'Gallery' && <Gallery />}
          {selectedNav === 'Travel' && <Travel />}
          {(selectedNav !== 'Gallery' && selectedNav !== 'Travel') && <Footer addImages={this.addImages} />}
        </div>
      </div>
    );
  }
}
export default Layout;
