import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid';
import Moment from 'react-moment';
import { fetchPostComments } from '../actions/actions';
import NewComment from './NewComment';
import { commentUpVote, commentDownVote } from '../actions/actions';
import DeleteComment from './DeleteComment';
import EditComment from './EditComment';

class Comments extends Component {
  componentWillMount() {
    if(this.props.id) this.props.fetchPostComments(this.props.id);
  }
  render() {
    const { comments } = this.props
    return (
      <div>
        <h2 className={ comments.length >= 1 ? "Comment-Header" : "hidden" }>Comments:</h2>
        { !comments.deleted && comments.map(comment =>
          <div className="Comment-Container" key={comment.id}>
            <div className="Comment-Voting-Container">
              <FontAwesomeIcon icon={faArrowUp} onClick={() => this.props.commentUpVote(comment.id, 'upVote')}/>
              <p>{comment.voteScore}</p>
              <FontAwesomeIcon icon={faArrowDown} onClick={() => this.props.commentDownVote(comment.id, 'downVote')}/>
            </div>
            <div className="Comment-Body">
              {comment.body}
            </div>
            <div className="Comment-Right-Flex">
              <div className="Comment-Buttons">
                <EditComment comment={comment}/>
                <DeleteComment id={comment.id}/>
              </div>
              <div className="Comment-By">
                submitted at <Moment format="MM/DD/YYYY HH:mm">{comment.timestamp}</Moment> by <b>{comment.author}</b>
              </div>
            </div>
          </div>
          )}
        <div className={ comments.length < 1 ? "No-Comments" : "hidden" }>
          No Comments Found
        </div>
        <NewComment parentId={this.props.id}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostComments: (id) => dispatch(fetchPostComments(id)),
  commentUpVote: (id, vote) => dispatch(commentUpVote(id, vote)),
  commentDownVote: (id, vote) => dispatch(commentDownVote(id, vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
