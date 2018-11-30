import {BarChart} from 'react-easy-chart';
import React, {Component} from 'react';
import {PieChart} from 'react-easy-chart';
import Nav from '../Nav';
import Bar from '../BarChart';
import Carousel2 from '../Carousel2';

class Movies extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div align="center">
        <Nav />
        <Carousel2 />
      </div>
    )
  }
}

export default Movies;
