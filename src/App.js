import React, { Component } from 'react';
import { myReducer } from './reducers';

let array1 = [
  { position: 'analyst', name: 'Bob' },
  { position: 'boss', name: 'Sally' },
  { position: 'underling', name: 'Tristan' }
];

export default class App extends Component {

  componentDidMount() {
    console.log(array1.reduce(myReducer, {}));
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
