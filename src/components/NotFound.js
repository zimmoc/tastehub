import React from 'react';
import NoResults from '../assets/no-results.png';
import Asset from '../components/Asset';
import SideBar from './sidebar/SideBar';
import appStyles from '../styles/App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotFound = () => {
  return (
    <Row>
      <Col
        md={4}
        lg={3}
        className={`d-none d-md-block p-0 m-0 ${appStyles.SideColumn}`}>
        <SideBar />
      </Col>
      <Col className={`p-0 pl-3 pr-3 ${appStyles.MiddleColumn}`} md={8} lg={6}>
        <Asset
          style={{ marginTop: '25vh' }}
          src={NoResults}
          message={"Sorry, the page you're looking for doesnt exist."}
        />
      </Col>
    </Row>
  );
};

export default NotFound;
