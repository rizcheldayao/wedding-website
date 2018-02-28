import React, { Component } from 'react';

class RSVP extends Component {
  render () {
    return (
      <div className='rsvp'>
        <section className='rsvp-card'>
          <h1>Will you joining us?</h1>
          <p>Please sign your RSVP</p>
          <form>
            <label>
               Your name:
              <input type='text' name='name' />
            </label>
            <label>
               Email address:
              <input type='text' name='name' />
            </label>
            <p>Finish with attend radio, meal preference, notes, number of guests</p>
            <input type='submit' value='Submit' />
          </form>
        </section>
      </div>
    );
  }
}
export default RSVP;
