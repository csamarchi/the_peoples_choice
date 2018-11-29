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
            <h1> Kardashian? </h1>
                  <PieChart
                  size={349}
                  labels data = {[
                    { value: this.state.valueC },
                    { value: this.state.valueD },
                  ]}
                  styles= {{
                    '.chart_text': {
                      fontSize: '1em',
                      fill: '#fff'
                    }
                  }}
                  />

                  <button onClick={this.handleClickC} > {this.props.name1} </button>
                  <button onClick={this.handleClickD}> {this.props.name2} </button>

            </div>
          );
        }
}

export default Pie2;
