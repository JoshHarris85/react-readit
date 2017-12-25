import React from 'react';
import App from './components/App';
import Categories from './components/Categories';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import Post from './components/Post';
import { Route, Switch, Link } from 'react-router-dom';

export default () => (
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
);
