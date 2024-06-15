import React from 'react';
import TopBar from './TopBar';
import Post from './posts/Post';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import css from '../../styles/Feed.module.css';

function Feed() {
  const location = useLocation();
  const showTopBar = ['/', '/following', '/liked'].includes(location.pathname);

  return (
    <div className={css.Feed}>
      {showTopBar && <TopBar />}
      <Post />
    </div>
  );
}

export default Feed;
