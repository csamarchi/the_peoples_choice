import React, {Component} from 'react';
import Nav from '../Nav';
import CreatePost from '../CreatePost';
import Pie from '../PieChart';
import Bar from '../BarChart';
import { Card, Image, Button, Icon, Label, Grid } from 'semantic-ui-react'
import './style.css';

const DisplayTrending = (props) => {
  console.log('christine', props)
    const displayTrending = props.trending.map((item) => {
        return (
          <div className='gridContainer'>
            <div className='trendingContainer'>
              <h3>{item.question}</h3>
              <h3>{item.choice1}</h3>
              <h3>{item.choice2}</h3>
              <h3>{item.category}</h3>
              <h3>{item.chartType}</h3>
            </div>
          </div>
        )
      })

    return(
      <div>
        <Card.Group>
        {displayTrending}
        </Card.Group>
      </div>
    )
  }


  export default DisplayTrending;
