import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Engagement33 from '../images/Engagement-0033.jpg';

class Footer extends Component {
  constructor (props) {
    super(props);
    this.addImages = this.addImages.bind(this);
  }

  addImages () {
    this.props.addImages();
  }

  render () {
    return (
      <div className='footer'>
        <img src={Engagement33} alt='Footer Image' onLoad={this.addImages} />
        <h1>Made with love by Rizchel</h1>
      </div>
    );
  }
}

Footer.propTypes = {
  addImages: PropTypes.func,
};

export default Footer;
