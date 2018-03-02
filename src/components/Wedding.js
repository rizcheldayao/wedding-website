import React, { Component } from 'react';
import Details from './Details';
import Timeline from './Timeline';
import Registry from './Registry';
import Instagram from './Instagram';
import RSVP from './RSVP';
import Data from '../data/data.json';

class Wedding extends Component {
  render () {
    return (
      <div className='wedding'>
        <h3>{Data.eventDetails}</h3>
        <h4>{Data.whenWhere}</h4>
        <Details />
        <Timeline />
        <section className='wedding-cards'>
          <Instagram />
          <RSVP />
        </section>
        <Registry />
      </div>
    );
  }
}
export default Wedding;
