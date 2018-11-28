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



class App extends Component {
  constructor() {
    super();
    this.state = {currentPage: 1};
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
};

pageOnChange = (number) => {
    this.setState({currentPage: number});
};

getPagesNumbers = () => {

    const pageNumbers = [];

    for (let i = 1; i <= 6; i++) {
        pageNumbers.push(
            <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
        )
    }

    return [...pageNumbers];
};


  render() {

    const pagesNumbers = this.getPagesNumbers();

    return(
      <div>
      <Nav />
      <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
      <LandingPage />
      <CategoryPage />
      <Celebrity />
      <Movies />
      <Shows />
      <Music />
      </ReactPageScroller>
      <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
      </Pager>
      <h1> Welcome!</h1>
      </div>
    )
  }
}

export default App;

//
// <Switch>
//   <Route exact path="/" component={ LandingPage } />
//   <Route exact path="/category" component={ CategoryPage } />
//   <Route exact path="/celebrity" component={ Celebrity } />
//   <Route exact path="/movies" component={ Movies } />
//   <Route exact path="/shows" component={ Shows } />
//   <Route exact path="/music" component={ Music } />
// </Switch>
