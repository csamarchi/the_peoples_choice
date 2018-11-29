import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage';
import CategoryPage from '../CategoryPage';
import Celebrity from '../Celebrity';
import Movies from '../Movies';
import Shows from '../Shows';
import Music from '../Music';

class Nav extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <nav className = "navBar">
        <ul>
        <li><Link to='/category'>Vote</Link></li>
        <li><Link to =''>Top Trending</Link></li>
        <li><Link to =''>Create a Post</Link></li>
        </ul>
      </nav>
    )
  }
}
export default Nav;
