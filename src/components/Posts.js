import React, { Component } from 'react';
import { connect } from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid'

class Posts extends Component {
  render() {
    const { posts } = this.props
    return (
      <div className="Posts-Container">
        {posts && !posts.deleted && posts.map(post =>
          <div className="Post-Container" key={post.id}>
            <div className="Post-Voting-Container">
              <FontAwesomeIcon icon={faArrowUp} />
              <p>{post.voteScore}</p>
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <p>{post.title}</p>
            <p>{post.timestamp}</p>
            <p>{post.body}</p>
            <p>{post.author}</p>
            <p>{post.category}</p>
          </div>
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
