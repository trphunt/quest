import React, { Component } from 'react';
import { myReducer, myExpander } from './reducers';

let originalArray = [
  { position: 'analyst', name: 'Bob' },
  { position: 'boss', name: 'Sally' },
  { position: 'underling', name: 'Tristan' }
];

export default class App extends Component {

  componentDidMount() {
    let reducedArray = originalArray.reduce(myReducer, {});
    console.log('originalArray:', originalArray);
    console.log('reducedArray:', reducedArray);
    console.log('expandedArray:', Object.entries(reducedArray).reduce(myExpander, []));
  }

  render() {
    return (
      <div>
        <h1>Quest</h1>
        <h2></h2>
      </div>
    );
  }
}
