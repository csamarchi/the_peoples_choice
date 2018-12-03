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
      <div className='background'>
      <Nav />
      <h1 className='headers' > Welcome!</h1>
        <container className='welcome'>
        </container>
      </div>
    )
  }
}

export default LandingPage;
