import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import PieChart from 'react-minimal-pie-chart';


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
              data={[
                { title: 'One', value: this.state.valueA, color: '#E38627' },
                { title: 'Two', value: this.state.valueB, color: '#C13C37' },
              ]}
              style={{height: '300px'}}
            />;

                  <button onClick={this.handleClickC} > {this.props.name1} </button>
                  <button onClick={this.handleClickD}> {this.props.name2} </button>

            </div>
          );
        }
}

export default Pie2;
