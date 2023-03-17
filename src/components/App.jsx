import React, { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

export class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Button />
        <Loader />
        <Modal />
      </div>
    );
  }
}
