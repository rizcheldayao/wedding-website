import React, { Component } from 'react';
import Countdown from '../containers/Countdown';
import Data from '../data/data.json';
import EngagementPic from '../images/header.jpg';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      image: null,
    }
  }

  componentWillMount () {
    const img = document.createElement('img');
    img.src = EngagementPic;
    this.setState({ image: img });
  }

  render () {
    return (
      <div className='header'>
        <img alt='Header image' src={this.state.image.src} />
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
