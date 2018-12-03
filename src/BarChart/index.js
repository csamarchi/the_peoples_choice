import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import BarChart from 'react-bar-chart';

class Bar extends Component {
  constructor() {
    super();
    this.state = {
      valueA: 0,
      valueB: 0,
    }
  }

  handleClickA = (e, prop) => {
    e.preventDefault();
    this.setState((prevState) => ({
      valueA: prevState.valueA + 1
    }))
  }

  handleClickB = (e, prop) => {
    e.preventDefault();
    this.setState((prevState) => ({
      valueB: prevState.valueB + 1
    }))
  }



  render() {

          return (
          <div>
            <h1> {this.props.question} </h1>
            <BarChart ylabel='Quantity'
                              width={550}
                              height={350}
                              margin={{top: 20, right: 20, bottom: 100, left: 150}}
                              data={[
              {text: this.props.name1, value: this.state.valueA},
              {text: this.props.name2, value: this.state.valueB},
            ]}/>

                  <button className='chartButtons' onClick={this.handleClickA} > {this.props.name1}</button>
                  <button className='chartButtons' onClick={this.handleClickB}> {this.props.name2} </button>
            </div>
          );
        }
}

export default Bar;
