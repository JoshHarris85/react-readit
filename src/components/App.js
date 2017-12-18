import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories, fetchPosts } from '../actions/actions'
import Categories from './Categories.js'
import Posts from './Posts.js'

class App extends Component {
  componentWillMount(){
      this.props.getCategories()
      this.props.getPosts()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Categories/>
        <Posts/>
      </div>
    );
  }
}

// const mapStateToProps = (state, props) => ({
//   categories: state.categories
// });

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(fetchCategories()),
  getPosts: () => dispatch(fetchPosts())
});


export default connect(
  null,
  mapDispatchToProps
)(App)
