import React from 'react';
import TopBar from './TopBar';
import Post from './posts/Post';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import css from '../../styles/Feed.module.css';
import { Col } from 'react-bootstrap';

function Feed() {
  const location = useLocation();
  const showTopBar = ['/', '/following', '/liked'].includes(location.pathname);

  return (
    <Col className="p-0 m-0">
      {showTopBar && <TopBar />}
      <Post className={css.Post} />
    </Col>
  );
}

export default Feed;
