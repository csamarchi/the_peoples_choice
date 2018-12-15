import React, {Component} from 'react';
import Nav from '../Nav';
import './style.css';

class LandingPage extends Component {

  render() {

    return(
      <div className='background2'>
        <Nav />
        <h1 className='headers2' > Good Afternoon!</h1>
        <h2> And welcome to the Peoples Choice</h2>
          <container className='welcome'>
            <img src='cheers.png' />
          </container>
      </div>
    )
  }
}

export default LandingPage;
