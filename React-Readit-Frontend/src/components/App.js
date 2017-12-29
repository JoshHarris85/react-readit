import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts.js';

class App extends Component {
  render() {
    return (
      <div>
        <Posts/>
      </div>
    );
  }
}


export default connect()(App);
