import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Pie from '../PieChart';
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
      if (item.category === this.props.insideCategory && item.chartType === 'bar') {
        console.log(item, 'mirza');
        return (
          <div>
            <Bar question={item.question} name1={item.choice1} name2={item.choice2} name3={item.choice3}/>
          </div>
        )
      } else if (item.category === this.props.insideCategory && item.chartType === 'pie') {
        return (
          <div>
            <Pie question={item.question} name1={item.choice1} name2={item.choice2} name3={item.choice3} name4={item.choice4}/>
          </div>
        )
      }
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
