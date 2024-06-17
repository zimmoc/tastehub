import React from 'react';
import Feed from '../components/feed/Feed';
import SideBar from '../components/sidebar/SideBar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import css from '../styles/Homepage.module.css';

function HomePage() {
  return (
    <Row className="h-100">
      <Col md={4} lg={3} className="d-none d-md-block p-0 m-0">
        <SideBar />
      </Col>
      <Col className="p-0 pl-3 pr-3" md={8} lg={6}>
        <Feed />
      </Col>
      <Col lg={3} className="d-none d-lg-block p-0">
        <Card className={css.Card}>
          <Card.Body>Right Sidebar Content</Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default HomePage;
