import React, {Component} from 'react';
import Nav from '../Nav';
import { Route, Link, Switch } from 'react-router-dom';
import Celebrity from '../Celebrity';
import Movies from '../Movies';
import Shows from '../Shows';
import Music from '../Music';

class CategoryPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
      <Nav />
      <h1 className='headers'> Pick a Category!</h1>
        <div className='categories'>
          <div className="circle">
          <Link to ='/celebrity'> Celebrities </Link>
          </div>
          <div className="circle2">
          <Link to ='/movies'> Movies </Link>
          </div>
          <div className="circle3">
          <Link to ='/shows'> Shows </Link>
          </div>
          <div className="circle4">
          <Link to ='/music'> Music </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryPage;
