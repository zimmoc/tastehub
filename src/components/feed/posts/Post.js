import React from 'react';
import { Col, Card, Container, Row } from 'react-bootstrap';
import css from '../../../styles/Post.module.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Post() {
  const location = useLocation();
  const explore = location.pathname === '/';
  const following = location.pathname === '/following';
  const liked = location.pathname === '/liked';
  return (
    <Container>
      <Row>
        <Col>
          <Card md={12} className={`mt-1 ${css.Card}`}>
            <Card.Body>
              <Card.Text>
                {explore && <h1>Explore</h1>}
                {following && <h1>Following</h1>}
                {liked && <h1>Liked</h1>}
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
