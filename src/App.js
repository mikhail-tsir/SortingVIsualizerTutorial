import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer'
import Toolbar from './Toolbar/Toolbar'
import './App.css';

const BAR_WIDTH = 2;
const NUM_BARS = Math.floor((window.innerWidth * 0.75) / 4);
const BAR_HEIGHT = window.innerHeight * 0.9



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    }
    this.resetArray = this.resetArray.bind(this);
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUM_BARS; i++) {
        array.push(randomIntFromInterval(5, BAR_HEIGHT));
    }
    this.setState({array});
    console.log("Resetting array");
}

  componentDidMount() {
    const array = [];
    for (let i = 0; i < NUM_BARS; i++) {
        array.push(randomIntFromInterval(5, BAR_HEIGHT));
    }
    this.setState({array});
    console.log('NUM_BARS = ', NUM_BARS);
  }

  render() {
    return (
      <div className="App">
        <SortingVisualizer array={this.state.array}></SortingVisualizer>
        <Toolbar resetFunc={this.resetArray}></Toolbar>
      </div>
    );
  }
  
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
