import { getCategories, getPosts, postVote } from '../utils/ReadableAPI'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const receiveCategories = categories => (
  {
    type: RECEIVE_CATEGORIES,
    categories
  }
)

export const fetchCategories = () => dispatch => (
  getCategories().then(categories => dispatch(receiveCategories(categories)))
)

export const receivePosts = posts => (
  {
    type: RECEIVE_POSTS,
    posts
  }
)

export const fetchPosts = () => dispatch => (
  getPosts().then(posts => dispatch(receivePosts(posts)))
)

export function addPost ({ title, body, author, category }) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category,
  }
}

export const setUpVotes = post => (
  {
    type: UP_VOTE_POST,
    post
  }
)

export const postUpVote = (id, vote) => dispatch => (
  postVote(id, vote).then(post => dispatch(setUpVotes(post)))
)

export const setDownVotes = post => (
  {
    type: DOWN_VOTE_POST,
    post
  }
)

export const postDownVote = (id, vote) => dispatch => (
  postVote(id, vote).then(post => dispatch(setDownVotes(post)))
)

export function editPost ({ id, title, body }) {
  return {
    type: EDIT_POST,
    id,
    title,
    body,
  }
}

export function deletePost ({ id, title, body }) {
  return {
    type: DELETE_POST,
    id,
    title,
    body,
  }
}

export function addComment ({ parentId, body, author }) {
  return {
    type: ADD_COMMENT,
    parentId,
    body,
    author,
  }
}

export function voteComment ({ id, vote }) {
  return {
    type: VOTE_COMMENT,
    id,
    vote,
  }
}

export function editComment ({ id, body }) {
  return {
    type: EDIT_COMMENT,
    id,
    body,
  }
}

export function deleteComment ({ id }) {
  return {
    type: DELETE_COMMENT,
    id,
  }
}
