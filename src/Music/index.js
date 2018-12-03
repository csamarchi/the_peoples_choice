import React, {Component} from 'react';
import Nav from '../Nav';
import Carousel from '../Carousel';

class Music extends Component {
  constructor() {
    super();
  }

  render() {

    const insideCategory = {
      category: 'Music'
    }

    return(
      <div>
        <Nav />
        <Carousel insideCategory={insideCategory.category} />
      </div>
    )
  }
}

export default Music;
