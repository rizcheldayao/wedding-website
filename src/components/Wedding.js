import React, { Component } from 'react';
import Details from './Details';
import Timeline from './Timeline';
import Registry from './Registry';

class Wedding extends Component {
  render () {
    return (
      <div className='wedding'>
        <h1>Event Details</h1>
        <p>When & where</p>
        <Details />
        <Timeline />
        <section className='wedding-instagram'>
          <h4>Help us document our wedding! Copy the hastag below and share your Instagram photos with us.</h4>
          <svg height='100' width='100'>
            <circle cx='50' cy='50' r='40' stroke='black' strokeWidth='3' fill='white' />
          </svg>
          <p>#woodyoubemine</p>
        </section>
        <Registry />
      </div>
    );
  }
}
export default Wedding;
