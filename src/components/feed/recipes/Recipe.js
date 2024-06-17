import React from 'react';
import { Col, Card } from 'react-bootstrap';
import css from '../../../styles/Recipe.module.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Recipe() {
  const location = useLocation();
  const explore = location.pathname === '/';
  const following = location.pathname === '/following';
  const liked = location.pathname === '/liked';
  return (
    <Col md={12} className={`m-0 p-3`}>
      <Card className={css.Card}>
        <Card.Body className="p-3">
          <Card.Text>
            {explore && <p>Explore</p>}
            {following && <p>Following</p>}
            {liked && <p>Liked</p>}
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Recipe;
