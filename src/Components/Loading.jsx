import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center '>
        <Spinner animation="border" variant="danger" className='text-xl text-[30px]' />
      </div>
    )
  }
}
