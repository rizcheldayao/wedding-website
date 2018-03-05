import React, { Component } from 'react';
import FooterPic from '../images/footer.jpg';

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <img src={FooterPic} />
      </div>
    );
  }
}
export default Footer;
