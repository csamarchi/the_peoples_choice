import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import CategoryPage from '../CategoryPage';

class Nav extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <nav className = "navBar">
        <ul>
  
        </ul>
      </nav>
    )
  }
}
export default Nav;

// <li><Link to='/category'>Vote</Link></li>
// <li><Link to =''>Top Trending</Link></li>
// <li><Link to =''>Create a Post</Link></li>
