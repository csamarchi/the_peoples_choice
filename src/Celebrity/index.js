import React, {Component} from 'react';
import Nav from '../Nav';
import Carousel from '../Carousel';


class Celebrity extends Component {
    constructor() {
      super();
      this.state = {
        celebrityChart: [],
      }
    }
    render() {

      const insideCategory = {
        category: 'Celebrity'
      }

      return(
        <div className='background' align="center">
          <Nav />
            <Carousel insideCategory={insideCategory.category}/>
        </div>
      )
    }
}

export default Celebrity;
