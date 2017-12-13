import { combineReducers } from 'redux'

import {
  ADD_POST,
  ADD_COMMENT,
} from '../actions/actions'

const initialAppState = {
  News: {
    Posts: []
  }
}

function posts (state = {}, action) {
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
  // const { day, recipe, meal } = action
  //
  // switch (action.type) {
  //   case ADD_RECIPE :
  //     return {
  //       ...state,
  //       [day]: {
  //         ...state[day],
  //         [meal]: recipe.label,
  //       }
  //     }
  //   case REMOVE_FROM_CALENDAR :
  //     return {
  //       ...state,
  //       [day]: {
  //         ...state[day],
  //         [meal]: null,
  //       }
  //     }
  //   default :
  //     return state
  // }
}

// {
//   News: {Posts: { {id: 1, comments: {id: 1}} {id: 2, comments: {id: 2}} }},
//   Programming: {Posts: { {id: 3, comments: {id: 3}} {id: 4, comments {id: 4}} }}
// }

const initialCategoriesState = {
  name: null,
  url: null
}

const initialPostState = {
  id: null,
  timestamp: Date.now(),
  title: null,
  body: null,
  author: null,
  category: null,
  voteScore: 1,
  deleted: false
}


const initialCommentState = {
  id: null,
  parentId: null,
  timestamp: Date.now(),
  body: null,
  author: null,
  voteScore: 1,
  deleted: false,
  parentDeleted: null
}

export default combineReducers({
  posts,
  comments,
})
