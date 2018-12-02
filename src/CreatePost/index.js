import React, {Component} from 'react';
import {PieChart} from 'react-easy-chart';
import Nav from '../Nav';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      chartType: '',
      question: '',
      choice1: '',
      choice2: '',
      choice3: '',
      choice4: '',
      category: '',
      pieChart: false,
      barChart: false,
      buttons: true
    }
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
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
            <input type='text' name='question' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Choice 1
            <input type='text' name='choice1' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Choice 2
            <input type='text' name='choice2' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Choice 3
            <input type='text' name='choice3' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Choice 4
            <input type='text' name='choice4' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Category
            <br/><br/>
            <input type='radio' name='category' onChange={this.handleChange} value='Celebrity' /> Celebrity
            <input type='radio' name='category' onChange={this.handleChange} value='Movies' /> Movies
            <input type='radio' name='category' onChange={this.handleChange} value='Shows'/> Shows
            <input type='radio' name='category' onChange={this.handleChange} value='Music' /> Music
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
            <input type='text' name='question' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Choice 1
            <input type='text' name='choice1' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Choice 2
            <input type='text' name='choice2' onChange={this.handleChange} value={this.state.value} />
          </label> <br/><br/>
          <label>
            Category
            <br/><br/>
            <input type='radio' name='category' onChange={this.handleChange} value='Celebrity' /> Celebrity
            <input type='radio' name='category' onChange={this.handleChange} value='Movies' /> Movies
            <input type='radio' name='category' onChange={this.handleChange} value='Shows'/> Shows
            <input type='radio' name='category' onChange={this.handleChange} value='Music' /> Music
          </label> <br/><br/>
            <button className='createButton' type='submit'>Submit</button>
        </form>
      )
    }

    return(
      <div>
        <Nav />
          <h1 className='createText'> Create your own post </h1>
            <div className='wrapperForm'>
              {this.state.buttons ? <button onClick={this.handleClickBar}>Bar chart</button> : null}
              {this.state.barChart ? barChart() : null}
              {this.state.buttons ? <button onClick={this.handleClickPie}>Pie chart</button> : null}
              {this.state.pieChart ? pieChart() : null}
            </div>
      </div>
    )
  }
}

export default CreatePost;
