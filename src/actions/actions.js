import { getCategories, getPosts, votePost, createPost, getPostComments, voteComment} from '../utils/ReadableAPI'
import uuidv4 from 'uuid/v4';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_CREATED_POST = 'ADD_CREATED_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

// Getting initial categories
export const fetchCategories = () => dispatch => (
  getCategories().then(categories => dispatch(receiveCategories(categories)))
)

export const receiveCategories = categories => (
  {
    type: RECEIVE_CATEGORIES,
    categories
  }
)

// Getting initial posts
export const fetchPosts = () => dispatch => (
  getPosts().then(posts => dispatch(receivePosts(posts)))
)

export const receivePosts = posts => (
  {
    type: RECEIVE_POSTS,
    posts
  }
)

// Getting comments for specific post
export const fetchPostComments = (id) => dispatch => (
  getPostComments(id).then(comments => dispatch(receivePostComments(comments)))
)

export const receivePostComments = comments => (
  {
    type: RECEIVE_POST_COMMENTS,
    comments
  }
)

// Creating posts
export const addPost = (post) => dispatch => (
  createPost(
              {
                id: uuidv4(),
                timestamp: Date.now(),
                title: post.title,
                body: post.body,
                author: post.author,
                category: post.category
              }
            ).then(post => dispatch(addCreatedPost(post)))
)

export const addCreatedPost = post => (
  {
    type: ADD_CREATED_POST,
    post
  }
)

// Creating upvotes on a post
export const postUpVote = (id, vote) => dispatch => (
  votePost(id, vote).then(post => dispatch(setPostUpVotes(post)))
)

export const setPostUpVotes = post => (
  {
    type: UP_VOTE_POST,
    post
  }
)
// Creating downvotes on a post
export const postDownVote = (id, vote) => dispatch => (
  votePost(id, vote).then(post => dispatch(setPostDownVotes(post)))
)

export const setPostDownVotes = post => (
  {
    type: DOWN_VOTE_POST,
    post
  }
)

// Creating upvotes on a comment
export const commentUpVote = (id, vote) => dispatch => (
  voteComment(id, vote).then(comment => dispatch(setCommentUpVotes(comment)))
)

export const setCommentUpVotes = comment => (
  {
    type: UP_VOTE_COMMENT,
    comment
  }
)
// Creating downvotes on a comment
export const commentDownVote = (id, vote) => dispatch => (
  voteComment(id, vote).then(comment => dispatch(setCommentDownVotes(comment)))
)

export const setCommentDownVotes = comment => (
  {
    type: DOWN_VOTE_COMMENT,
    comment
  }
)

// Editing a post
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
