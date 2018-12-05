import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Card, Image, Button, Icon, Label, Grid } from 'semantic-ui-react'
import Nav from '../Nav';
import CreatePost from '../CreatePost';
import Pie from '../PieChart';
import Bar from '../BarChart';
import './style.css';
import PieChart from 'react-minimal-pie-chart';


class DisplayTrending extends Component {
  constructor(){
    super();
  }

  handleViewClick = (e, id) => {
    console.log('HELLO',id)

  }


    render() {

      const displayTrending = this.props.trending.map((item, i) => {
        if (item.chartType === 'pie') {
          return (
            <div key={item._id} className='chartDiv'>
              <h3>{item.question}</h3>
                <Image src='pie_chart.png' />
                <Route render={({ history}) => (
                  <button id={item._id} onClick={() => { history.push('/'+ item._id) }}
    >View</button>)} />
            </div>
          )
        } else {
          return (
            <div key={item._id} className='chartDiv'>
              <h3>{item.question}</h3>
              <Image src='bar_chart.png' />
              <Route render={({ history}) => (
                <button onClick={() => { history.push('/'+ item._id) }}
  >View</button>)} />
           </div>
          )
        }
      })

      return(
        <div>
          <div className='chartList'>
            {displayTrending}
          </div>
        </div>
      )
    }
  }


  export default DisplayTrending;
