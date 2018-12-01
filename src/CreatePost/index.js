import React, {Component} from 'react';
import {PieChart} from 'react-easy-chart';
import Nav from '../Nav';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      question: 'MIRZA',
      choice1: '',
      choice2: '',
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
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

  render() {
    return(
      <div>
        <Nav />
        <h1 className='createText'> Creat your own post </h1>
          <div className='wrapperForm'>
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
                <input type='radio' name='category' onChange={this.handleChange} value={this.state.value} /> Celebrity
                <input type='radio' name='category' onChange={this.handleChange} value={this.state.value} /> Movies
                <input type='radio' name='category' onChange={this.handleChange} value={this.state.value} /> Shows
                <input type='radio' name='category' onChange={this.handleChange} value={this.state.value} /> Music
              </label> <br/><br/>
                <button className='createButton' type='submit'>Submit</button>
            </form>
        </div>
      </div>
    )
  }
}

export default CreatePost;
