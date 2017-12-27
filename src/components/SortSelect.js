import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPosts } from '../actions/actions';

class SortSelect extends Component {
  sort = e => {
    console.log(e.target)
    this.props.sortPosts(e.target.value)
  }
  render() {
    return (
      <div className="Sort-Button-Container">
        <div className="Sort-Title"><b>Sort By:</b></div>
        <select className="Sort-Button" onChange={this.sort}>
          <option default value="score descending">
            Vote Score | Descending
          </option>
          <option default value="score ascending">
            Vote Score | Ascending
          </option>
          <option default value="time descending">
            Date | Descending
          </option>
          <option default value="time ascending">
            Date | Ascending
          </option>
        </select>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sortPosts: (sort) => dispatch(sortPosts(sort))
});

export default connect(
  null,
  mapDispatchToProps
)(SortSelect)
