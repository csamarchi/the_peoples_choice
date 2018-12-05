import React, {Component} from 'react';
import Nav from '../Nav';
import CategoryPage from '../CategoryPage';
import Celebrity from '../Celebrity';
import Movies from '../Movies';
import Sports from '../Sports';
import Music from '../Music';
import {Pager} from "react-bootstrap";
import './style.css';

class LandingPage extends Component {
  constructor() {
    super();
  }

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
