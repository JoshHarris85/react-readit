import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/actions'
import Categories from './Categories.js'

class App extends Component {
  componentWillMount(){
      this.props.getCategories()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Categories/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// const mapStateToProps = (state, props) => ({
//   categories: state.categories
// });

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(fetchCategories()),
});


export default connect(
  null,
  mapDispatchToProps
)(App)
