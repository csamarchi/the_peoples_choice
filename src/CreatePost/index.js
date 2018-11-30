import React, {Component} from 'react';
import {PieChart} from 'react-easy-chart';
import Nav from '../Nav';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      question: '',
      choice1: '',
      choice2: '',
    }
  }

  render() {


    return(
      <div>
        <Nav />
        <h1 className='createText'> Creat your own post </h1>
          <div className='wrapperForm'>
            <form>
              <label>
                Question
                <input type='text' question='question' />
              </label> <br/><br/>
              <label>
                Choice 1
                <input type='text' choice1='choice1' />
              </label> <br/><br/>
              <label>
                Choice 2
                <input type='text' choice2='choice2' />
              </label>
            </form>
        </div>
      </div>
    )
  }
}

export default CreatePost;
