import React, {Component} from 'react';
import Nav from '../Nav';
import CreatePost from '../CreatePost';
import DisplayTrending from '../DisplayTrending';

class TopTrending extends Component {
  constructor() {
    super();
    this.state = {
      trending: [],
    }
  }

  getChart = async () => {
    const chart = await fetch('http://localhost:9000/pie');
    console.log(chart, 'MKMK');
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
    console.log(this.state.chart)
    return(
      <div>
        <Nav />
        <h1> Trending Now</h1>
        {this.state.chart ? <DisplayTrending trending={this.state.chart}/> : null}
      </div>
    )
  }
}

export default TopTrending;
