import uuidv4 from 'uuid/v4';
import {
  getCategories,
  getPosts,
  createPost,
  votePost,
  deletePost,
  updatePost,
  getPostComments,
  voteComment,
  deleteComment,
  createComment,
  updateComment
} from '../utils/ReadableAPI';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const SORT_POSTS = 'SORT_POSTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';

// Getting initial categories
export const fetchCategories = () => dispatch => (
  getCategories().then(categories => dispatch(receiveCategories(categories)))
);

export const receiveCategories = categories => (
  {
    type: RECEIVE_CATEGORIES,
    categories
  }
);

// Getting initial posts
export const fetchPosts = () => dispatch => (
  getPosts().then(posts => dispatch(receivePosts(posts)))
);

export const receivePosts = posts => (
  {
    type: RECEIVE_POSTS,
    posts
  }
);

// Getting comments for specific post
export const fetchPostComments = (id) => dispatch => (
  getPostComments(id).then(comments => dispatch(receiveComments(comments)))
);

export const receiveComments = comments => (
  {
    type: RECEIVE_COMMENTS,
    comments
  }
);

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
);

export const addCreatedPost = post => (
  {
    type: CREATE_POST,
    post
  }
);

// Delete post
export const removePost = (id) => dispatch => (
  deletePost(id).then(post => dispatch(removeDeletedPost(post)))
);

export const removeDeletedPost = post => (
  {
    type: DELETE_POST,
    post
  }
);

// Creating upvotes on a post
export const postUpVote = (id, vote) => dispatch => (
  votePost(id, vote).then(post => dispatch(setPostUpVotes(post)))
);

export const setPostUpVotes = post => (
  {
    type: UP_VOTE_POST,
    post
  }
);

// Creating downvotes on a post
export const postDownVote = (id, vote) => dispatch => (
  votePost(id, vote).then(post => dispatch(setPostDownVotes(post)))
);

export const setPostDownVotes = post => (
  {
    type: DOWN_VOTE_POST,
    post
  }
);

// Editting Posts
export const editPost = (post) => dispatch => (
  updatePost(post.id, post.title, post.body).then(post => dispatch(setEdittedPost(post)))
);

export const setEdittedPost = post => (
  {
    type: EDIT_POST,
    post
  }
);

// Sorting posts
export function sortPosts (sort) {
  return {
    type: SORT_POSTS,
    sort
  }
};

// Editting Comments
export const editComment = (comment) => dispatch => (
  updateComment(comment.id, comment.timestamp, comment.body).then(comment => dispatch(setEdittedComment(comment)))
);

export const setEdittedComment = comment => (
  {
    type: EDIT_COMMENT,
    comment
  }
);

// Creating comments
export const addComment = (comment) => dispatch => (
  createComment(
                 {
                   id: uuidv4(),
                   timestamp: Date.now(),
                   body: comment.body,
                   author: comment.author,
                   parentId: comment.parentId
                 }
               ).then(comment => dispatch(addCreatedComment(comment)))
);

export const addCreatedComment = comment => (
  {
    type: CREATE_COMMENT,
    comment
  }
);

// Creating upvotes on a comment
export const commentUpVote = (id, vote) => dispatch => (
  voteComment(id, vote).then(comment => dispatch(setCommentUpVotes(comment)))
);

export const setCommentUpVotes = comment => (
  {
    type: UP_VOTE_COMMENT,
    comment
  }
);

// Creating downvotes on a comment
export const commentDownVote = (id, vote) => dispatch => (
  voteComment(id, vote).then(comment => dispatch(setCommentDownVotes(comment)))
);

export const setCommentDownVotes = comment => (
  {
    type: DOWN_VOTE_COMMENT,
    comment
  }
);

// Delete comment
export const removeComment = (id) => dispatch => (
  deleteComment(id).then(comment => dispatch(removeDeletedComment(comment)))
);

export const removeDeletedComment = comment => (
  {
    type: DELETE_COMMENT,
    comment
  }
);
