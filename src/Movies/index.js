import React, {Component} from 'react';
import Nav from '../Nav';
import Carousel from '../Carousel';

class Movies extends Component {
  constructor() {
    super();
  }

  render() {

    const insideCategory = {
      category: 'Movies'
    }

    return(
      <div align="center">
        <Nav />
        <Carousel insideCategory={insideCategory.category}/>
      </div>
    )
  }
}

export default Movies;
