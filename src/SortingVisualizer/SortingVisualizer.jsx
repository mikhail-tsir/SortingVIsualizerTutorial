import React from 'react';
import './SortingVisualizer.css';


//const SIDE_WIDTH = (window.innerWidth - (NUM_BARS * (BAR_WIDTH + 1))) / 2;



export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Sorting Visualizer mounting");
    }

    render () {
        const {array} = this.props;
        return (
            <div className="array-container">
            {array.map((value, idx) => (
                <div
                className="array-bar"
                key={idx}
                style={{height: `${value}px`}}>
                </div>
            ))}
            {/*<button className="reset-button"
                    onClick={() => this.resetArray()}>Generate New Array</button>*/}
            </div>
        );
    }
}

