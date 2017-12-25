import { combineReducers } from 'redux'
import { createPost } from '../utils/ReadableAPI'
import uuidv4 from 'uuid/v4';

import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  CREATE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
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
  const { title, body, author, category, id, form } = action
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case CREATE_POST:
      const newPost = {
        id: uuidv4(),
        timestamp: Date.now(),
        title: action.title,
        body: action.body,
        author: action.author,
        category: action.category,
        voteScore: 1,
        deleted: false
      };

      createPost(newPost).then(posts => console.log(posts));

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
    default :
      return state
  }
}

function comments (state = initialCommentsState, action) {
  const { title, body, author, category } = action

  switch (action.type) {
    case ADD_COMMENT:
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
