import React, { Component } from 'react';
import { connect } from 'react-redux'
import { orderBy, capitalize } from 'lodash';
import { Link } from 'react-router-dom';

class Categories extends Component {
  render() {
    const { categories } = this.props
    return (
      <ul className="Nav-Links">
        {orderBy(categories, 'name').map(category =>
          <li key={capitalize(category.name)}>
            <Link to={`/${category.path}`} className="Nav-Links">
              {capitalize(category.path)}
            </Link>
          </li>
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
