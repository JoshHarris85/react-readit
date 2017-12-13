import { combineReducers } from 'redux'
import { getCategories, getPosts } from '../utils/ReadableAPI'

import {
  ADD_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../actions/actions'

console.log(getCategories())

function posts (state = getPosts(), action) {
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

function comments (state = {}, action) {
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

function categories (state = getCategories(), action) {
  switch (action.type) {
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
