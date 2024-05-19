import React, { Component } from 'react'
import Loading from '../loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
            <img src={Loading} style={{width:'4em'}} alt="Loading" />
      </div>
    )
  }
}

export default Spinner
