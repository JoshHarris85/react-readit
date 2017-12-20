import React, { Component } from 'react';
import { connect } from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { capitalize } from 'lodash';
import { postUpVote, postDownVote } from '../actions/actions';

class Posts extends Component {
  filteredPosts = () => {
    if(this.props.posts && this.props.match && this.props.match.params && this.props.match.params.category && this.props.match.params.category != 'All'){
      let category = this.props.match.params.category;
      return this.props.posts.filter(post => capitalize(post.category) == capitalize(category))
    }
    else {
      return this.props.posts
    }
  }
  render() {
    const { posts } = this.props
    let filteredPosts = this.filteredPosts();
    return (
      <div className="Posts-Container">
        {posts && !posts.deleted && filteredPosts.map(post =>
          <div className="Post-Container" key={post.id}>
            <div className="Post-Voting-Container">
              <FontAwesomeIcon icon={faArrowUp} onClick={() => this.props.postUpVote(post.id, 'upVote')}/>
              <p>{post.voteScore}</p>
              <FontAwesomeIcon icon={faArrowDown} onClick={() => this.props.postDownVote(post.id, 'downVote')}/>
            </div>
            <div className="Post-Title">
              {post.title}
            </div>
            <div className="Posted-By">
              submitted at <Moment unix format="MM/DD/YYYY HH:mm">{post.timestamp}</Moment> by <b>{post.author}</b> to <b>{post.category}</b>
            </div>
          </div>
        )}
        <div className={ filteredPosts.length < 1 ? "No-Posts" : "hidden" }>
          No Posts Found
        </div>
        <Link to={`/posts/new`}>
          <button className="New-Post">
            Create Post
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  postUpVote: (id, vote) => dispatch(postUpVote(id, vote)),
  postDownVote: (id, vote) => dispatch(postDownVote(id, vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
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
