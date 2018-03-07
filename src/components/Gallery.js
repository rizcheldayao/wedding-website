import React, { Component } from 'react';
import GalleryLib from 'react-grid-gallery';
import { IMAGES } from '../data/gallery';

class Gallery extends Component {
  render () {
    return (
      <div className='gallery' id='Gallery'>
        <h1>Gallery</h1>
        <h4>Dating</h4>
        <section className='gallery-images'>
          <GalleryLib images={IMAGES} />
        </section>
      </div>
    );
  }
}

export default Gallery;
