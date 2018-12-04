import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import PieChart from 'react-minimal-pie-chart';

class Pie extends Component {
  constructor() {
    super();
    this.state = {
      valueA: 1,
      valueB: 1,
      valueC: 1,
      valueD: 1,
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
            <br/>
            <PieChart
              data={[
                { title: 'One', value: this.state.valueA, color: '#b53d45' },
                { title: 'Two', value: this.state.valueB, color: '#ffd472' },
                { title: 'Three', value: this.state.valueC, color: '#9a74ed' },
                { title: 'Four', value: this.state.valueD, color: '#1ea0cc' },
              ]}
              style={{height: '280px',
              }}
            />

                <div className='buttonContainer'>
                  <button className='pieButtons' onClick={this.handleClickA}>{this.props.name1}</button><br/><br/>
                  <button className='pieButtons' onClick={this.handleClickB}>{this.props.name2}</button><br/><br/>
                  <button className='pieButtons' onClick={this.handleClickC}>{this.props.name3}</button><br/><br/>
                  <button className='pieButtons' onClick={this.handleClickD}>{this.props.name4}</button>
                </div>
            </div>
          );
        }
}

export default Pie;
