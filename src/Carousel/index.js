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
    const polls = await fetch('http://localhost:9000/pie');
    const pollsParsedJSON = await polls.json();

      return pollsParsedJSON
  }

  componentDidMount() {
    this.getChart().then((polls) => {
      this.setState({polls: polls.data})
    }).catch((err) => {
      console.log(err);
    })
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }


  render() {

    const displayPolls = this.state.polls.map((item) => {
      if (item.category === this.props.insideCategory && item.chartType === 'bar') {
        return (
          <div key={item._id}>
            <Bar question={item.question} name1={item.choice1} name2={item.choice2} name3={item.choice3}/>
          </div>
        )
      } else if (item.category === this.props.insideCategory && item.chartType === 'pie') {
        return (
          <div key={item._id}>
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
          )
        }
      }

export default CarouselPage;
