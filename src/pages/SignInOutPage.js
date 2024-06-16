import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import SignInForm from './auth/SignInForm';
import SignUpForm from './auth/SignUpForm';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function SignInOutPage() {
  const location = useLocation();
  const signInPage = location.pathname === '/signin';
  const signUpPage = location.pathname === '/signup';

  return (
    <Container fluid>
      <Row>
        <Col md={3} className="d-none d-md-block">
          <SideBar />
        </Col>
        <Col xs={12} md={9}>
          {signInPage && <SignInForm />}
          {signUpPage && <SignUpForm />}
        </Col>
      </Row>
    </Container>
  );
}

export default SignInOutPage;
