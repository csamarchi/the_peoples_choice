import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import PieChart from 'react-minimal-pie-chart';

class Pie extends Component {
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
            <PieChart
              data={[
                { title: 'One', value: this.state.valueA, color: '#E38627' },
                { title: 'Two', value: this.state.valueB, color: '#C13C37' },
              ]}
              style={{height: '300px'}}
            />;
                  <button onClick={this.handleClickA}>{this.props.name1}</button>
                  <button onClick={this.handleClickB}>{this.props.name2}</button>

            </div>
          );
        }
}

export default Pie;
