import React, {Component} from 'react';
import Nav from '../Nav';
import './style.css';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      chartType: '',
      question: '',
      choice1: {
        name: '',
        vote: 0
      },
      choice2: {
        name: '',
        vote: 0
      },
      choice3: {
        name: '',
        vote: 0
      },
      choice4: {
        name: '',
        vote: 0
      },
      category: '',
      pieChart: false,
      barChart: false,
      buttons: true
    }
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  handleChoiceChange = (e) => {
    let choice = Object.assign({}, this.state[e.currentTarget.name])
    choice.name = e.currentTarget.value
    this.setState({[e.currentTarget.name]: choice});
  }


  handleCreatePost = async (e) => {
    e.preventDefault();
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

  handleClickPie = (e) => {
    console.log(this.state.pieChart)
    e.preventDefault();
    this.setState({
      chartType: 'pie',
      pieChart: true,
      buttons: false
    })
  }

  handleClickBar = (e) => {
    e.preventDefault();
    this.setState({
      chartType: 'bar',
      barChart: true,
      buttons: false
    })
  }

  render() {
    const pieChart = () => {
      return (
        <form onSubmit={this.handleCreatePost} >
          <label>
            Question
            <input className='questionBox' type='text' name='question' placeholder='Type here...' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/><br/>
          <label>
            Choice 1
            <input type='text' name='choice1' onChange={this.handleChoiceChange} value={this.state.value} />
          </label>
          <label>
            Choice 2
            <input type='text' name='choice2' onChange={this.handleChoiceChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Choice 3
            <input type='text' name='choice3' onChange={this.handleChoiceChange} value={this.state.value} />
          </label>
          <label>
            Choice 4
            <input type='text' name='choice4' onChange={this.handleChoiceChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Category
            <br/><br/>
            <input className='radio' type='radio' name='category' onChange={this.handleChange} value='Music' /> Music
            <input className='radio' type='radio' name='category' onChange={this.handleChange} value='Celebrity' /> Celebrity<br/><br/>
            <input className='radio' type='radio' name='category' onChange={this.handleChange} value='Sports'/> Sports
            <input className='radio' type='radio' name='category' onChange={this.handleChange} value='Movies' /> Shows / Movies
          </label> <br/><br/>
            <button className='createButton' type='submit'>Submit</button>
        </form>
      )
    }

    const barChart = () => {
      return (
        <form onSubmit={this.handleCreatePost} >
          <label>
            Question
            <input className='questionBox' type='text' name='question' placeholder='Type here...' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/><br/>
          <label>
            Choice 1
            <input type='text' name='choice1' onChange={this.handleChoiceChange} value={this.state.value} />
          </label>
          <label>
            Choice 2
            <input type='text' name='choice2' onChange={this.handleChoiceChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Category
            <br/><br/>
            <input className='radio' type='radio' name='category' onChange={this.handleChange} value='Music' /> Music
            <input className='radio' type='radio' name='category' onChange={this.handleChange} value='Celebrity' /> Celebrity<br/><br/>
            <input className='radio' type='radio' name='category' onChange={this.handleChange} value='Sports'/> Sports
            <input className='radio' type='radio' name='category' onChange={this.handleChange} value='Movies' /> Shows / Movies
          </label> <br/><br/>
            <button className='createButton' type='submit'>Submit</button>
        </form>
      )
    }

    return(
      <div className='background'>
        <Nav />
          <h1 className='createText'> Create your own post </h1>
            <div className='wrapperForm'>
              {this.state.buttons ? <button className='barButton' onClick={this.handleClickBar} /> : null}
              {this.state.barChart ? barChart() : null}
              {this.state.buttons ? <button className='pieButton' onClick={this.handleClickPie} /> : null}
              {this.state.pieChart ? pieChart() : null}
            </div>
      </div>
    )
  }
}

export default CreatePost;
