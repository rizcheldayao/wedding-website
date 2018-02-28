import React, { Component } from 'react';

class Registry extends Component {
  render () {
    return (
      <div className='registry'>
        <h1>Gifts Registry</h1>
        <p>Your presence is enough but if you'd like to get a gift, we are registered at the following.</p>
        <p>-thank you-</p>
        <div className='registry-stores'>
          <div className='registry-square' />
          <div className='registry-square' />
          <div className='registry-square' />
        </div>
      </div>
    );
  }
}
export default Registry;
