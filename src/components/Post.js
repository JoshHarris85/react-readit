import React, { Component } from 'react';
import { connect } from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { capitalize } from 'lodash';
import { postUpVote, postDownVote } from '../actions/actions';
import NewPost from './NewPost';

class Post extends Component {
  filteredPost = () => {
    if(this.props.posts && this.props.match && this.props.match.params && this.props.match.params.id){
      return this.props.posts.filter(post => post.id === this.props.match.params.id && !post.deleted)
      // this.props.posts.find(post => post.id === this.props.match.params.id && !post.deleted)
    }
  }
  render() {
    let filteredPost = this.filteredPost();
    console.log(filteredPost[0])
    return (
      <div>
        { filteredPost.length === 1 && filteredPost.map(post =>
          <div className="Post-Container" key={post.id}>
            <div className="Post-Voting-Container">
              <FontAwesomeIcon icon={faArrowUp} onClick={() => this.props.postUpVote(post.id, 'upVote')}/>
              <p>{post.voteScore}</p>
              <FontAwesomeIcon icon={faArrowDown} onClick={() => this.props.postDownVote(post.id, 'downVote')}/>
            </div>
            <div className="Post-Title">
              <Link to={`/${capitalize(post.category)}/${post.id}`} className="Post-Links">
                {post.title}
              </Link>
            </div>
            <div className="Post-Comments">
              <Link to={`/${capitalize(post.category)}/${post.id}`} className="Post-Links">
                Comments: {post.commentCount}
              </Link>
            </div>
            <div className="Posted-By">
              submitted at <Moment unix format="MM/DD/YYYY HH:mm">{post.timestamp}</Moment> by <b>{post.author}</b> to <b>{post.category}</b>
            </div>
          </div>
          )}
        <div className={ filteredPost.length !== 1 ? "No-Posts" : "hidden" }>
          No Post Found
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts
});

export default connect(
  mapStateToProps
)(Post)

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
