import React, { Component } from 'react';
import { connect } from 'react-redux'

class Categories extends Component {
  render() {
    const { categories } = this.props
    return (
      <div>
        {categories && categories.map(category =>
          <p key={category.name}>{category.name}</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  categories: state.categories
});

export default connect(
  mapStateToProps
)(Categories)
