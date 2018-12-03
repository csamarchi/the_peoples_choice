import React, { Component } from 'react';
import {Pager} from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import CategoryPage from './CategoryPage';
import Celebrity from './Celebrity';
import Movies from './Movies';
import Sports from './Sports';
import Music from './Music';
import Nav from './Nav';
import CreatePost from './CreatePost';
import TopTrending from './TopTrending';

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
            <Route exact path="/Sports" component={Sports} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/create" component={CreatePost} />
            <Route exact path="/trending" component={TopTrending} />
          </Switch>
          </div>
    )
  }
}

export default App;
