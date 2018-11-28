import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import {PieChart} from 'react-easy-chart';

class Bar extends Component {
  constructor() {
    super();
    this.state = {
      valueA: 0,
      valueB: 0,
      valueC: 0,
      valueD: 0,
      valueE: 0,

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

  handleClickE = (e, prop) => {
    e.preventDefault();
    this.setState((prevState) => ({
      valueE: prevState.valueE + 1
    }))
  }

  render() {

          return (
          <div>
            <h1> Best Rom Com? </h1>
              <PieChart
                size={350}
                labels data={[
                 {key: 'A', value: this.state.valueA},
                 {key: 'B', value: this.state.valueB},
                 {key: 'C', value: this.state.valueC},
                 {key: 'D', value: this.state.valueD},
                 {key: 'E', value: this.state.valueE},
                ]}
                />
                  <button onClick={this.handleClickA} > 50 First Dates </button>
                  <button onClick={this.handleClickB}> Forgetting Sarah Marshall </button>
                  <button onClick={this.handleClickC}> What Happens in Vegas </button>
                  <button onClick={this.handleClickD}> Crazy Stupid Love </button>
                  <button onClick={this.handleClickE}> Friends with Benefits </button>

            </div>
          );
        }
}

export default Bar;
