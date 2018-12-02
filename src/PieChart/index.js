import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import PieChart from 'react-minimal-pie-chart';

class Pie extends Component {
  constructor() {
    super();
    this.state = {
      valueA: 0,
      valueB: 0,
      valueC: 0,
      valueD: 0,
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
  handleClickC = (e, prop) => {
    e.preventDefault();
    this.setState((prevState) => ({
      valueC: prevState.valueC + 1
    }))
  }
  handleClickD = (e, prop) => {
    e.preventDefault();
    this.setState((prevState) => ({
      valueD: prevState.valueD + 1
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
                { title: 'Three', value: this.state.valueC, color: '#C13C37' },
                { title: 'Four', value: this.state.valueD, color: '#C13C37' },

              ]}
              style={{height: '300px'}}
            />;
                  <button onClick={this.handleClickA}>{this.props.name1}</button>
                  <button onClick={this.handleClickB}>{this.props.name2}</button>
                  <button onClick={this.handleClickC}>{this.props.name3}</button>
                  <button onClick={this.handleClickD}>{this.props.name4}</button>
            </div>
          );
        }
}

export default Pie;
