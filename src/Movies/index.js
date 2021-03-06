import React, {Component} from 'react';
import Nav from '../Nav';
import Carousel from '../Carousel';

class Movies extends Component {
  
  render() {

    const insideCategory = {
      category: 'Movies'
    }

    return(
      <div className='background' align="center">
        <Nav />
        <Carousel insideCategory={insideCategory.category}/>
      </div>
    )
  }
}

export default Movies;
