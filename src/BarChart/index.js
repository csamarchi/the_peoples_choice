import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import BarChart from 'react-bar-chart';
import './style.css';

class Bar extends Component {
  constructor() {
    super();
    this.state = {
      choice1: {
        name: '',
        votes: 0
      },
      choice2: {
        name: '',
        votes: 0
      },
      valueA: 0,
      valueB: 0,
    }
  }

  updateVote = async (e) => {
    console.log(this.state, 'worked');

    try {
      const addedPie = await fetch('http://localhost:9000/pie', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(addedPie)

    } catch (err) {
      console.log(err);
      console.log('error');
    }
  }


  handleClickA = async (e, prop) => {
    e.preventDefault();
    console.log(prop, '------------');
    this.setState((prevState) => ({
      valueA: prevState.valueA + 1
    }))

    const handleA = await fetch('http://localhost:9000/pie', {
      method: 'POST',

    })


    let choice = Object.assign({}, this.state[e.currentTarget.name])
    choice.vote = this.props.vote1 + 1
    this.setState({[e.currentTarget.name]: choice});
    console.log(this.props.vote1);
    console.log(choice);
    this.updateVote()
  }

  handleClickB = (e, prop) => {
    e.preventDefault();
    this.setState((prevState) => ({
      valueB: prevState.valueB + 1
    }))

    let choice = Object.assign({}, this.state[e.currentTarget.name])
    choice.vote = this.props.vote2 + 1
    this.setState({[e.currentTarget.name]: choice});
    this.updateVote()
  }



  render() {

          return (
          <div>
            <h1> {this.props.question} </h1>
            <BarChart ylabel='Quantity'
                              width={500}
                              height={400}
                              margin={{top: 40, right: 20, bottom: 100, left: 200}}
                              data={[
              {text: this.props.name1, value: this.state.valueA, fill: '#ce6b72'},
              {text: this.props.name2, value: this.state.valueB, fill: '#ffd472'},
            ]}/>

                  <button className='chartButtons' name='choice1' onClick={this.handleClickA} > {this.props.name1}</button>
                  <button className='chartButtons' name='choice2' onClick={this.handleClickB}> {this.props.name2} </button>
            </div>
          );
        }
}

export default Bar;
