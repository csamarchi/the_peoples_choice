import React, {Component} from 'react';
import Pie from '../PieChart';
import Pie2 from '../PieChart2';
import Carousel from 'nuka-carousel';
import {PieChart} from 'react-easy-chart';

class CarouselPage extends Component {
  constructor() {
    super();
  }


  render() {

          return (
          <div >
          <Carousel className='carousel'>
            <div>
              <Pie name1={'Jimmy Kimmel'} name2={'Jimmy Fallon'} key='first'/>
            </div>
            <div>
              <Pie name1={'Kendall'} name2={'Kylie'} key='second'/>
            </div>
          </Carousel>
          </div>
          );
        }
      }

export default CarouselPage;
