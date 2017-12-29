import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './components/App';
import Categories from './components/Categories';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import Post from './components/Post';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { fetchCategories, fetchPosts } from './actions/actions';

class Router extends Component {
  componentWillMount(){
      this.props.getCategories()
      this.props.getPosts()
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="App-header">
            <Link to={`/`} className="Nav-Links">
              <h1 className="App-title">React Readit</h1>
            </Link>
            <Categories/>
          </header>

          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/:category" component={Posts} />
            <Route exact path="/posts/new" component={NewPost} />
            <Route exact path="/:category/:id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(fetchCategories()),
  getPosts: () => dispatch(fetchPosts())
});


export default connect(
  null,
  mapDispatchToProps
)(Router)
