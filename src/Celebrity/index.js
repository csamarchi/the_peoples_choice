import React, {Component} from 'react';
import {PieChart} from 'react-easy-chart';
import Nav from '../Nav';
import Carousel from '../Carousel';

class Celebrity extends Component {
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
      return(
        <div align="center">
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
      )
    }
}

export default Celebrity;
