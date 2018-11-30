import React, { Component } from 'react';
import {Pager} from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import CategoryPage from './CategoryPage';
import Celebrity from './Celebrity';
import Movies from './Movies';
import Shows from './Shows';
import Music from './Music';
import Nav from './Nav';
import CreatePost from './CreatePost';


class App extends Component {
  constructor() {
    super();

  }


  render() {


    return(
      <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/category" component={CategoryPage} />
            <Route exact path="/celebrity" component={Celebrity} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/shows" component={Shows} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/create" component={CreatePost} />
          </Switch>
          </div>
    )
  }
}

export default App;
