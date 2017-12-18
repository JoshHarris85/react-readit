import React, { Component } from 'react';
import { connect } from 'react-redux'

class Posts extends Component {
  render() {
    const { posts } = this.props
    return (
      <div>
        {posts && posts.map(post =>
          <p key={post.id}>{post.title}</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts
});

export default connect(
  mapStateToProps
)(Posts)

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
