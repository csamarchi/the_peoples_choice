import React, {Component} from 'react';
import {PieChart} from 'react-easy-chart';
import Nav from '../Nav';
import CreatePost from '../CreatePost';

const DisplayTrending = (props) => {
  console.log('christine', props)
    const displayTrending = props.trending.map((item) => {
        return (
          <div>
          <h3>{item.question}</h3>
          <h3>{item.choice1}</h3>
          <h3>{item.choice2}</h3>
          <h3>{item.category}</h3>
          </div>
        )
      })
    return(
      <div>
        {displayTrending}
      </div>
    )

}

export default DisplayTrending;
