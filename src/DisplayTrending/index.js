import React, {Component} from 'react';
import Nav from '../Nav';
import CreatePost from '../CreatePost';

const DisplayTrending = (props) => {
  console.log('christine', props)
    const displayTrending = props.trending.map((item) => {
        return (
          <div className='gridContainer'>
          <h3>{item.question}</h3>
          <h3>{item.choice1}</h3>
          <h3>{item.choice2}</h3>
          <h3>{item.category}</h3>
          <h3>{item.chartType}</h3>
          </div>
        )
      })
    return(
      <div>
        <div>
          {displayTrending}
        </div>
      </div>
    )

}

export default DisplayTrending;
