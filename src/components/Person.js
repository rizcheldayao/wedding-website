import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor (props) {
    super(props);
    this.addImages = this.addImages.bind(this);
  }

  addImages () {
    this.props.addImages();
  }

  render () {
    const { name, img, title } = this.props;
    return (
      <div className='about-person'>
        <div className='about-circle'>
          <img src={img} alt='Wedding party image' onLoad={this.addImages} />
        </div>
        <div className='about-role'>
          <h4>{title}</h4>
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  addImages: PropTypes.func,
};

export default Person;
