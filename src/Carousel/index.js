import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import {PieChart} from 'react-easy-chart';
import Pie from '../PieChart';
import Pie2 from '../PieChart2';

class CarouselPage extends Component {
  constructor() {
    super();
  }


  render() {

          return (
          <div>
            <Carousel>
              <div>
                <Pie />
              </div>
              <div>
                <Pie2 />
              </div>
            </Carousel>

            </div>
          );
        }
      }

export default CarouselPage;
