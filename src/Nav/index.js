import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage';
import CategoryPage from '../CategoryPage';
import Celebrity from '../Celebrity';
import Movies from '../Movies';
import Sports from '../Sports';
import Music from '../Music';
import './style.css';

class Nav extends Component {
  constructor() {
    super()
  }


  render() {
    return(
      <nav className = "navBar">
        <ul>
          <Link to='/'> <img className='cheers' src='cheers.png'/> </Link>
          <Link to='/category'>Vote</Link>
          <Link to ='/trending'>Top Trending</Link>
          <Link to ='/create'>Create a Post</Link>
        </ul>
      </nav>
    )
  }
}
export default Nav;
