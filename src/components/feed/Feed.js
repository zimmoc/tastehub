import React from 'react';
import TopBar from './TopBar';
import Recipe from './recipes/Recipe';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Col } from 'react-bootstrap';

function Feed() {
  const location = useLocation();
  const showTopBar = ['/', '/following', '/liked'].includes(location.pathname);

  return (
    <Col className="p-0 m-0">
      {showTopBar && <TopBar />}
      <Recipe />
    </Col>
  );
}

export default Feed;
