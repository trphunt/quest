import React, { Component } from 'react';
import { myReducer, myExpander } from './reducers';

let originalArray = [
  { position: 'analyst', name: 'Bob' },
  { position: 'boss', name: 'Sally' },
  { position: 'underling', name: 'Tristan' }
];

export default class App extends Component {

  renderOriginalArray() {
    return originalArray.map((item, index) => {
      return (
        <div key={'orig_item' + index}>
          position: {item.position}, name: {item.name}
        </div>
      );
    });
  }

  renderReducedArray() {
    let reducedArray = originalArray.reduce(myReducer, {});
    return Object.entries(reducedArray).map((item, index) => {
      return (
        <div key={'reduced_item' + index}>
          {item[0]}: {item[1]}
        </div>
      );
    });
  }

  renderExpandedArray() {
    let reducedArray = originalArray.reduce(myReducer, {});
    return Object.entries(reducedArray)
      .reduce(myExpander, [])
      .map((item, index) => {
        return (
          <div key={'exp_item' + index}>
            position: {item.position}, name: {item.name}
          </div>
        );
      });
  }

  render() {
    return (
      <div>
        <h1>Reducer Quest</h1>
        <hr />
        <h2>Original Array:</h2>
        {this.renderOriginalArray()}
        <hr />
        <h2>Reduced Array:</h2>
        {this.renderReducedArray()}
        <hr />
        <h2>Expanded Array:</h2>
        {this.renderExpandedArray()}
      </div>
    );
  }
}
