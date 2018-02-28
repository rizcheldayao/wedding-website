import React, { Component } from 'react';

class Details extends Component {
  render () {
    return (
      <div className='details'>
        <div className='details-section'>
          <section className='details-ceremony'>
            <svg height='100' width='100'>
              <circle cx='50' cy='50' r='40' stroke='black' strokeWidth='3' fill='white' />
            </svg>
            <p>Ceremony</p>
            <p>Name of venue</p>
            <p>Time</p>
            <p>Address</p>
            <p>Number</p>
          </section>
          <section className='details-map' />
          <section className='details-reception'>
            <svg height='100' width='100'>
              <circle cx='50' cy='50' r='40' stroke='black' strokeWidth='3' fill='white' />
            </svg>
            <p>Reception</p>
            <p>Name of venue</p>
            <p>Time</p>
            <p>Address</p>
            <p>Number</p>
          </section>
        </div>
      </div>
    );
  }
}
export default Details;
