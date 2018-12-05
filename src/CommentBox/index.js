import React, {Component} from 'react';
import Nav from '../Nav';
import Carousel from '../Carousel';
import './style.css';

class CommentBox extends Component {
  constructor() {
    super();

  }

  render() {

    const comment = () => {
      return (
        <form>
          <label>
            Name
            <input type='text' name='name' />
          </label> <br/><br/><br/>
          <label>
            Comment
            <input type='text' name='comment'  />
          </label>
              <button className='createButton' type='submit'>Post Comment</button>
        </form>
      )
    }

    return(
      <div>
        <h3> Comment Something</h3>
        {comment}
      </div>
    )
  }
}

export default CommentBox;
