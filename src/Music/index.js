import React, {Component} from 'react';
import Nav from '../Nav';
import Carousel from '../Carousel';

class Music extends Component {

  render() {

    const insideCategory = {
      category: 'Music'
    }

    return(
      <div className='background'>
        <Nav />
        <Carousel insideCategory={insideCategory.category} />
      </div>
    )
  }
}

export default Music;
