import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPosts } from '../actions/actions';

class SortSelect extends Component {
  sort = e => {
    this.props.sortPosts(e.target.value);
  }

  render() {
    return (
      <div className="Sort-Button-Container">
        <div className="Sort-Title"><b>Sort By:</b></div>
        <select className="Sort-Button" onChange={this.sort}>
          <option default value="">
            None
          </option>
          <option value="score descending">
            Vote Score | Descending
          </option>
          <option value="score ascending">
            Vote Score | Ascending
          </option>
          <option value="time descending">
            Date | Descending
          </option>
          <option value="time ascending">
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
