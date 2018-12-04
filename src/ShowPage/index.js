import React, {Component} from 'react';
import Nav from '../Nav';
import { Header, Card, Button, Image, Icon, Content, Grid } from 'semantic-ui-react';
import CreatePost from '../CreatePost';
import Pie from '../PieChart';
import Bar from '../BarChart';

class ShowPage extends Component {
  constructor() {
    super();
    this.state = {
      chart: []
    }
  }

  getChart = async () => {
    const chart = await fetch('http://localhost:9000/pie/_id');
    const chartParsedJSON = await chart.json();
      return chartParsedJSON
  }

  componentDidMount() {
    this.getChart().then((chart) => {
      this.setState({chart: chart.data})
    }).catch((err) => {
      console.log(err);
    })
  }


  render() {

    console.log(this.props.match);
    return(
      <div>
        <Nav />

      </div>
    )
  }
}

export default ShowPage;
