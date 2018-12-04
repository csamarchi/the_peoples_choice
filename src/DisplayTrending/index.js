import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Header, Card, Button, Image, Icon, Content, Grid } from 'semantic-ui-react';
import Nav from '../Nav';
import CreatePost from '../CreatePost';
import Pie from '../PieChart';
import Bar from '../BarChart';
import './style.css';
import PieChart from 'react-minimal-pie-chart';

// handleClick = () => {
//   e.preventDefault();
//   <Link to ='/show' />
// }

class DisplayTrending extends Component {
  constructor(){
    super();
  }

  handleViewClick = (e) => {

    console.log('HELLO',e.currentTarget)
  }


    render() {
      const displayTrending = this.props.trending.map((item, i) => {
          return (

            <Grid columns={3} divided key={item._id}>
              <Grid.Row>
                <h3>{item.question}</h3>
                  <Image src='pie_chart.png' />
                  <button props={item.question} onClick={this.handleViewClick}>View</button>
              </Grid.Row>
            </Grid>
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
  }


  export default DisplayTrending;
