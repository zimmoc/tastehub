import React from 'react';
import TopBar from './TopBar';
import Post from './posts/Post';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Feed() {
  const location = useLocation();
  const showTopBar = ['/', '/following', '/liked'].includes(location.pathname);

  return (
    <>
      {showTopBar && <TopBar />}
      <Post />
    </>
  );
}

export default Feed;
