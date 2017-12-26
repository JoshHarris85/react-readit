import React, { Component } from 'react';
import { connect } from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { capitalize } from 'lodash';
import { fetchPostComments } from '../actions/actions';

class Comments extends Component {
  componentWillMount() {
    if(this.props.id) this.props.fetchPostComments(this.props.id)
  }
  render() {
    const { comments } = this.props
    return (
      <div>
        <h2 className="Comment-Header">Comments:</h2>
        { !comments.deleted && comments.map(comment =>
          <div className="Comment-Container" key={comment.id}>
            <div className="Comment-Voting-Container">
              <FontAwesomeIcon icon={faArrowUp} onClick={() => this.props.postUpVote(comment.id, 'upVote')}/>
              <p>{comment.voteScore}</p>
              <FontAwesomeIcon icon={faArrowDown} onClick={() => this.props.postDownVote(comment.id, 'downVote')}/>
            </div>
            <div className="Comment-Body">
              {comment.body}
            </div>
            <div className="Comment-By">
              submitted at <Moment unix format="MM/DD/YYYY HH:mm">{comment.timestamp}</Moment> by <b>{comment.author}</b>
            </div>
          </div>
          )}
        <div className={ comments.length < 1 ? "No-Comments" : "hidden" }>
          No Comments Found
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostComments: (id) => dispatch(fetchPostComments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
