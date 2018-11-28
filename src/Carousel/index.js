import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import {PieChart} from 'react-easy-chart';


class CarouselPage extends Component {
  constructor() {
    super();
    this.state = {
      valueA: 0,
      valueB: 0
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
            <Carousel>
              <div>
              <h1> Who is your favorite Talk Show Host? </h1>
                    <PieChart
                    labels data = {[
                      { key: 'A', value: this.state.valueA },
                      { key: 'B', value: this.state.valueB },
                    ]}
                    styles= {{
                      '.chart_text': {
                        fontSize: '1em',
                        fill: '#fff'
                      }
                    }}
                    />
                    <button onClick={this.handleClickA} > Jimmy Fallon </button>
                    <button onClick={this.handleClickB}> Jimmy Kimmel </button>
                </div>
                <div>
                <h1> Celebrity </h1>
                      <PieChart
                      labels data = {[
                        { key: 'A', value: this.state.valueA },
                        { key: 'B', value: this.state.valueB },
                      ]}
                      styles= {{
                        '.chart_text': {
                          fontSize: '1em',
                          fill: '#fff'
                        }
                      }}
                      />
                      <button onClick={this.handleClickA} > Kim Kardashian </button>
                      <button onClick={this.handleClickB}> Kendall Jenner </button>
                  </div>
              </Carousel>

            </div>
          );
        }
      }

export default CarouselPage;
