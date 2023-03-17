import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul className="gallery">
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
};
