import React from 'react';
import { Col, Card, Container, Row } from 'react-bootstrap';
import css from '../../../styles/Post.module.css';

function Post() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card md={12} className={`mt-1 ${css.Card}`}>
            <Card.Body>
              <Card.Text>
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
