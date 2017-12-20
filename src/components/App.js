import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts } from '../actions/actions';
import Categories from './Categories.js';
import Posts from './Posts.js';
import './App.css';

class App extends Component {
  componentWillMount(){
      this.props.getCategories()
      this.props.getPosts()
  }
  render() {
    return (
      <div>
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
