import React, {Component} from 'react';
import Nav from '../Nav';
import { Header, Card, Button, Image, Icon, Content, Grid } from 'semantic-ui-react';
import CreatePost from '../CreatePost';
import Pie from '../PieChart';
import Bar from '../BarChart';
import './style.css';
import CommentBox from '../CommentBox';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: []
    }
  }

  getChart = async () => {
    const chart = await fetch('http://localhost:9000/pie' + this.props.match.url );
    const chartParsedJSON = await chart.json();
      return chartParsedJSON
  }

  componentDidMount() {
    this.getChart().then((chart) => {
      this.setState({chart: chart.data})
      console.log(this.state.chart, 'MIRZA')
    }).catch((err) => {
      console.log(err);
    })
  }


  render() {
    const showChart = () => {
      if (this.state.chart.chartType === 'bar') {
        return (
          <Bar key={this.state.chart._id} question={this.state.chart.question} name1={this.state.chart.choice1.name} name2={this.state.chart.choice2.name} />
        )
      } else if (this.state.chart.chartType  === 'pie') {
        return (
            <Pie key={this.state.chart._id} question={this.state.chart.question} name1={this.state.chart.choice1.name} name2={this.state.chart.choice2.name} name3={this.state.chart.choice3.name} name4={this.state.chart.choice4.name}/>
        )
      }
    }


    console.log(this.props.match);
    return(
      <div className='background'>
        <Nav />
        {showChart()}
      </div>
    )
  }
}

export default ShowPage;
