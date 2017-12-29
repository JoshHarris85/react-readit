import React, { Component } from 'react';
import { connect } from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { capitalize } from 'lodash';
import { postUpVote, postDownVote } from '../actions/actions';
import Comments from './Comments';
import DeletePost from './DeletePost';
import EditPost from './EditPost';

class Post extends Component {
  filteredPost = () => {
    if(this.props.posts && this.props.match && this.props.match.params && this.props.match.params.id){
      return this.props.posts.filter(post => post.id === this.props.match.params.id && !post.deleted)
    }
  }
  render() {
    let filteredPost = this.filteredPost();
    return (
      <div>
        { filteredPost.length === 1 && filteredPost.map(post =>
          <div key={post.id}>
            <div className="Post-Container">
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
              <div className="Post-Right-Flex">
                <div className="Post-Buttons">
                  <EditPost post={post}/>
                  <DeletePost id={post.id}/>
                </div>
                <div className="Posted-By">
                  submitted at <Moment unix format="MM/DD/YYYY HH:mm">{post.timestamp}</Moment> by <b>{post.author}</b> to <b>{post.category}</b>
                </div>
              </div>
            </div>
            <Comments id={post.id} />
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

const mapDispatchToProps = (dispatch) => ({
  postUpVote: (id, vote) => dispatch(postUpVote(id, vote)),
  postDownVote: (id, vote) => dispatch(postDownVote(id, vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
