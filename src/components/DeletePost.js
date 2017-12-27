import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePost } from '../actions/actions';

class DeletePost extends Component {
  handleDelete = e => {
    this.props.removePost(this.props.id);
  };

  render() {
    return (
      <div className="Post-Delete-Container">
        <button className="Post-Delete-Button" onClick={this.handleDelete}>
          Delete Post
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removePost: (id) => dispatch(removePost(id))
});

export default connect(
  null,
  mapDispatchToProps
)(DeletePost)
