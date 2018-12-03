import React, {Component} from 'react';
import Nav from '../Nav';
import { Route, Link, Switch } from 'react-router-dom';
import Celebrity from '../Celebrity';
import Movies from '../Movies';
import Sports from '../Sports';
import Music from '../Music';
import './style.css';

class CategoryPage extends Component {
  constructor() {
    super();

  }

  render() {
    return(
      <div className='background'>
        <Nav />
        <h1 className='headers'> Choose a Category</h1>
          <div className='categories'>

            <Link to ='/celebrity'>
              <div className="circle">
                <h1 className='categoryButtonText'> Celebrities </h1>
              </div>
            </Link>

            <Link to ='/movies'>
              <div className="circle2">
              <h1 className='categoryButtonText'> Shows <br/> & Movies </h1>
              </div>
            </Link>

            <Link to ='/Sports'>
              <div className="circle3">
              <h1 className='categoryButtonText'> Sports </h1>
              </div>
            </Link>

            <Link to ='/music'>
              <div className="circle4">
                <h1 className='categoryButtonText'> Music </h1>
              </div>
           </Link>

          </div>
      </div>
    )
  }
}

export default CategoryPage;
