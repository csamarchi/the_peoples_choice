import React, {Component} from 'react';
import Nav from '../Nav';
import Carousel from '../Carousel';
import Pie from '../PieChart';



class Celebrity extends Component {
    constructor() {
      super();

    }



    render() {
      return(
        <div align="center">
          <Nav />
          <Carousel />
        </div>
      )
    }
}

export default Celebrity;
