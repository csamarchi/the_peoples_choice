import React, {Component} from 'react';
import Nav from '../Nav';
import Carousel from '../Carousel';

class Sports extends Component {
  constructor() {
    super();
  }

  render() {

    const insideCategory = {
      category: 'Sports'
    }

    return(
      <div className='background'>
        <Nav />
        <Carousel insideCategory={insideCategory.category} />
      </div>
    )
  }
}

export default Sports;
