import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import {PieChart} from 'react-easy-chart';
import Bar from '../BarChart';


class CarouselPage2 extends Component {
  constructor() {
    super();
  }


  render() {

          return (
          <div>
            <Carousel>
              <div>
                <Bar />
              </div>
            </Carousel>
            </div>
          );
        }
      }

export default CarouselPage2;
