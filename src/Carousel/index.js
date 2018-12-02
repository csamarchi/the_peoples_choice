import React, {Component} from 'react';
import Pie from '../PieChart';
import Carousel from 'nuka-carousel';
import {PieChart} from 'react-easy-chart';
import Bar from '../BarChart';


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
    const displayPolls = this.state.polls.map((item) => {
      console.log(item);
          return (
            <div>
            {item.chartType == 'pie' ? <Pie question={item.question} name1={item.choice1} name2={item.choice2} name3={item.choice3} name4={item.choice4}/> : <Bar question={item.question} name1={item.choice1} name2={item.choice2} name3={item.choice3}/>}
            </div>
          )
        })
          return (
          <div >
          <Carousel className='carousel'>
          {displayPolls}
          </Carousel>
          </div>
          );
        }
      }

export default CarouselPage;
