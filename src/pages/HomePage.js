import React from 'react';
import Feed from '../components/feed/Feed';
import SideBar from '../components/sidebar/SideBar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import css from '../styles/Homepage.module.css';

function HomePage() {
  return (
    <div className={css.HomePage}>
      <div className={css.FeedWrapper}>
        <Feed />
      </div>
      <div className={css.RightSidebar}>
        <Card className={css.Card}>
          <Card.Body>Right Sidebar Content</Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
