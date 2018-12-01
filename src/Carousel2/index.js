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
                <Bar question={'Favorite Rom Com?'} name1={'Forgetting Sarah Marshell'} name2={'Crazy Stupid Love'} name3={'50 First Dates'}key='first'/>
            </div>
            <div>
                <Bar question={'Best out of three'} name1={'Mean Girls'} name2={'13 Going on 30'} name3={'Bring it On'}key='first'/>
            </div>
            </Carousel>
            </div>
          );
        }
      }

export default CarouselPage2;
