import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import {PieChart} from 'react-easy-chart';

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
            <h1> Favorite Talk Show Host? </h1>
                  <PieChart

                  size={350}
                  labels data = {[
                    { value: this.state.valueA },
                    { value: this.state.valueB },
                  ]}
                  styles= {{
                    '.chart_text': {
                      fontSize: '1em',
                      fill: '#fff'
                    }
                  }}
                  />

                  <button onClick={this.handleClickA}>{this.props.name1}</button>
                  <button onClick={this.handleClickB}>{this.props.name2}</button>

            </div>
          );
        }
}

export default Pie;
