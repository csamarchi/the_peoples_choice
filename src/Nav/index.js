import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage';
import CategoryPage from '../CategoryPage';
import Celebrity from '../Celebrity';
import Movies from '../Movies';
import Sports from '../Sports';
import Music from '../Music';

class Nav extends Component {
  constructor() {
    super()
  }

  handleClick = () => {
    console.log('hey');

  }

  render() {
    return(
      <nav className = "navBar">
        <ul>
        <li><img onClick={this.handleClick} className='cheers' src='cheers.png'/></li>
        <li><Link to='/category'>Vote</Link></li>
        <li><Link to ='/trending'>Top Trending</Link></li>
        <li><Link to ='/create'>Create a Post</Link></li>
        </ul>
      </nav>
    )
  }
}
export default Nav;
