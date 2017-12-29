import { combineReducers } from 'redux';
import { orderBy } from 'lodash';
import * as type from '../actions/actions'

const initialCategoriesState = [];
const initialPostsState = [];
const initialCommentsState = [];

function categories (state = initialCategoriesState, action) {
  switch (action.type) {
    case type.RECEIVE_CATEGORIES:
      return action.categories;
    default :
      return state;
  }
}

function posts (state = initialPostsState, action) {
  switch (action.type) {
    case type.RECEIVE_POSTS:
      return action.posts;
    case type.CREATE_POST:
      return [...state, action.post];
    case type.DELETE_POST:
      return [...state].filter(post => post.id !== action.post.id);
    case type.UP_VOTE_POST:
      return [...state].map(post => {
      	if (action.post.id === post.id) post.voteScore += 1;
        return post;
      });
    case type.DOWN_VOTE_POST:
      return [...state].map(post => {
        if (action.post.id === post.id) post.voteScore -= 1;
        return post;
      });
    case type.SORT_POSTS:
      switch(action.sort) {
        case 'score ascending': return orderBy([...state], ['voteScore'], ['asc']);
        case 'score descending': return orderBy([...state], ['voteScore'], ['desc']);
        case 'time ascending': return orderBy([...state], ['timestamp'], ['asc']);
        case 'time descending': return orderBy([...state], ['timestamp'], ['desc']);
        default: return state;
      }
    case type.EDIT_POST:
      return [...state].map(post => {
        if (action.post.id === post.id) return action.post;
        return post;
      });
    default :
      return state;
  }
}

function comments (state = initialCommentsState, action) {
  switch (action.type) {
    case type.RECEIVE_COMMENTS:
      return action.comments;
    case type.CREATE_COMMENT:
      return [...state, action.comment];
    case type.DELETE_COMMENT:
      return [...state].filter(comment => comment.id !== action.comment.id);
    case type.UP_VOTE_COMMENT:
      return [...state].map(comment => {
        if (action.comment.id === comment.id) comment.voteScore += 1;
        return comment;
      });
    case type.DOWN_VOTE_COMMENT:
      return [...state].map(comment => {
        if (action.comment.id === comment.id) comment.voteScore -= 1;
        return comment;
      });
    case type.EDIT_COMMENT:
      return [...state].map(comment => {
        if (action.comment.id === comment.id) return action.comment;
        return comment;
      });
    default :
      return state;
  }
}

export default combineReducers({
  posts,
  comments,
  categories,
});
