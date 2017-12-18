import React, { Component } from 'react';
import { connect } from 'react-redux'
import { orderBy, capitalize } from 'lodash';

class Categories extends Component {
  render() {
    const { categories } = this.props
    return (
      <ul>
        {orderBy(categories, 'name').map(category =>
          <li key={capitalize(category.name)}>{capitalize(category.name)}</li>
        )}
      </ul>
    )
  }
}

const mapStateToProps = (state, props) => ({
  categories: state.categories
});

export default connect(
  mapStateToProps
)(Categories)
