import { combineReducers } from 'redux'
import { orderBy } from 'lodash';

import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  ADD_CREATED_POST,
  ADD_CREATED_COMMENT,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  SORT_POSTS,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  RECEIVE_POST_COMMENTS,
  ADD_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../actions/actions'

const initialCategoriesState = []
const initialPostsState = []
const initialCommentsState = []

function categories (state = initialCategoriesState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories
    default :
      return state
  }
}

function posts (state = initialPostsState, action) {
  const { title, body, author, category, id, form } = action
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case ADD_CREATED_POST:
      return [...state, action.post]
    case DELETE_POST:
      return [...state].filter(post => post.id !== action.post.id)
    case UP_VOTE_POST:
      return [...state].map(post => {
      	if (action.post.id == post.id) post.voteScore += 1;
        return post
      })
    case DOWN_VOTE_POST:
      return [...state].map(post => {
        if (action.post.id == post.id) post.voteScore -= 1;
        return post
      })
    case SORT_POSTS:
      switch(action.sort){
        case 'score ascending': return orderBy([...state], ['voteScore'], ['asc']);
        case 'score descending': return orderBy([...state], ['voteScore'], ['desc']);
        case 'time ascending': return orderBy([...state], ['timestamp'], ['asc']);
        case 'time descending': return orderBy([...state], ['timestamp'], ['desc']);
      }
    case EDIT_POST:
    return [...state].map(post => {
      if (action.post.id == post.id) return action.post
      return post
    })
    default :
      return state
  }
}

function comments (state = initialCommentsState, action) {
  const { title, body, author, category } = action

  switch (action.type) {
    case RECEIVE_POST_COMMENTS:
      return action.comments
    case ADD_CREATED_COMMENT:
      return [...state, action.comment]
    case DELETE_COMMENT:
      return [...state].filter(comment => comment.id !== action.comment.id)
    case UP_VOTE_COMMENT:
      return [...state].map(comment => {
        if (action.comment.id == comment.id) comment.voteScore += 1;
        return comment
      })
    case DOWN_VOTE_COMMENT:
      return [...state].map(comment => {
        if (action.comment.id == comment.id) comment.voteScore -= 1;
        return comment
      })
    default :
      return state
  }
}

export default combineReducers({
  posts,
  comments,
  categories,
})
