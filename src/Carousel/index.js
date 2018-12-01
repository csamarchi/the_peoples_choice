import React, {Component} from 'react';
import Pie from '../PieChart';
import Carousel from 'nuka-carousel';
import {PieChart} from 'react-easy-chart';

class CarouselPage extends Component {
  constructor() {
    super();
    this.state = {
      polls: []
    }
  }

  getChart = async () => {
    console.log('FIFTH')
    const polls = await fetch('http://localhost:9000/pie');
    const pollsParsedJSON = await polls.json();

      return pollsParsedJSON
  }

  componentDidMount() {
    console.log('FOURTH')
    this.getChart().then((polls) => {
      this.setState({polls: polls.data})
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {

          return (
          <div >
          <Carousel className='carousel'>
            <div>
              <Pie question={'Best talk show host?'} name1={'Jimmy Kimmel'} name2={'Jimmy Fallon'} key='first'/>
            </div>
            <div>
              <Pie question={'Kardashian'} name1={'Kendall'} name2={'Kylie'} key='second'/>
            </div>

          </Carousel>
          </div>
          );
        }
      }

export default CarouselPage;
