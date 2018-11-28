import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import {PieChart} from 'react-easy-chart';


class Pie2 extends Component {
  constructor() {
    super();
    this.state = {
      valueC: 0,
      valueD: 0
    }
  }

  handleClickC = (e, prop) => {
    e.preventDefault();
    this.setState((prevState) => ({
      valueA: prevState.valueC + 1
    }))
  }

  handleClickB = (e, prop) => {
    e.preventDefault();
    this.setState((prevState) => ({
      valueB: prevState.valueD + 1
    }))
  }

  render() {

          return (
          <div>
            <h1> Kardashian? </h1>
                  <PieChart
                  labels data = {[
                    { key: 'A', value: this.state.valueC },
                    { key: 'B', value: this.state.valueD },
                  ]}
                  styles= {{
                    '.chart_text': {
                      fontSize: '1em',
                      fill: '#fff'
                    }
                  }}
                  />

                  <button onClick={this.handleClickC} > Kendall </button>
                  <button onClick={this.handleClickD}> Kylie </button>

            </div>
          );
        }
}

export default Pie2;
