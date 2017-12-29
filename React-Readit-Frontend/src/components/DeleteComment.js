import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComment } from '../actions/actions';

class DeleteComment extends Component {
  handleDelete = e => {
    this.props.removeComment(this.props.id);
  };

  render() {
    return (
      <div className="Delete-Comment-Container">
        <button className="Delete-Comment" onClick={this.handleDelete}>
          Delete Comment
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteComment);
