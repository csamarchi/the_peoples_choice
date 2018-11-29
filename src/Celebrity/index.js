import React, {Component} from 'react';
import {PieChart} from 'react-easy-chart';
import Nav from '../Nav';
import Carousel from '../Carousel';
import Pie from '../PieChart';
import Pie2 from '../PieChart2';



class Celebrity extends Component {
    constructor() {
      super();

    }



    render() {
      return(
        <div align="center">
        <Carousel />
        </div>
      )
    }
}

export default Celebrity;
