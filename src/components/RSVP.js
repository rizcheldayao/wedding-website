import React, { Component } from 'react';
import Data from '../data/data.json';

class RSVP extends Component {
  render () {
    return (
      <div className='rsvp'>
        <h3>{Data.rsvpTitle}</h3>
        <p>{Data.rsvpSubtitle}</p>
        <button className='rsvp-button'>{Data.rsvp}</button>
      </div>
    );
  }
}
export default RSVP;
