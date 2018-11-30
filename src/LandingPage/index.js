import React, {Component} from 'react';
import {PieChart} from 'react-easy-chart';
import Nav from '../Nav';
import ReactPageScroller from "react-page-scroller";
import CategoryPage from '../CategoryPage';
import Celebrity from '../Celebrity';
import Movies from '../Movies';
import Shows from '../Shows';
import Music from '../Music';
import {Pager} from "react-bootstrap";

class LandingPage extends Component {
  constructor() {
    super();
  }

  render() {

    return(
      <div>
      <Nav />
      <h1 className='headers' > Welcome!</h1>

      </div>
    )
  }
}

export default LandingPage;
