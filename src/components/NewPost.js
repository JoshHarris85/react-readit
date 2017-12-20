import React, { Component } from 'react';
import { connect } from 'react-redux'

class NewPost extends Component {
  render() {
    const { posts } = this.props
    return (
      <div>
        hello world
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts
});

export default connect(
  mapStateToProps
)(NewPost)

// const initialPostState = {
//   id: null,
//   timestamp: Date.now(),
//   title: null,
//   body: null,
//   author: null,
//   category: null,
//   voteScore: 1,
//   deleted: false
// }
