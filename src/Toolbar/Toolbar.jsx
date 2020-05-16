import React from 'react';
import './Toolbar.css';
import SortVis from '../SortingVisualizer/SortingVisualizer';

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        console.log("Toolbar mounted");
    }

    render () {
        const {resetFunc} = this.props;

        return (
            <div className="toolbar-container">
                <button onClick = {resetFunc}>Generate New Array</button>
            </div>
        )
    }

}