import { combineReducers } from 'redux'
import { getCategories, getPosts } from '../utils/ReadableAPI'

import {
  RECEIVE_CATEGORIES,
  ADD_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
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
  const { title, body, author, category } = action

  switch (action.type) {
    case ADD_POST :
      return {
        ...state
      }
    default :
      return state
  }
}

function comments (state = initialCommentsState, action) {
  const { title, body, author, category } = action

  switch (action.type) {
    case ADD_COMMENT :
      return {
        ...state
      }
    default :
      return state
  }
}

// const initialCategoriesState = {
//   name: null,
//   url: null
// }
//
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
//
//
// const initialCommentState = {
//   id: null,
//   parentId: null,
//   timestamp: Date.now(),
//   body: null,
//   author: null,
//   voteScore: 1,
//   deleted: false,
//   parentDeleted: null
// }

export default combineReducers({
  posts,
  comments,
  categories,
})
