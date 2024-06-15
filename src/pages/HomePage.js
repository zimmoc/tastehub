import React from 'react';
import Feed from '../components/feed/Feed';
import SideBar from '../components/sidebar/SideBar';
import { Container, Row, Col } from 'react-bootstrap';

function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="d-none d-md-block">
          <SideBar />
        </Col>
        <Col xs={12} md={6}>
          <Feed />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
