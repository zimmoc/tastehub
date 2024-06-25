import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignInForm from './auth/SignInForm';
import SignUpForm from './auth/SignUpForm';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function SignInOutPage() {
  const location = useLocation();
  const signInPage = location.pathname === '/signin';
  const signUpPage = location.pathname === '/signup';

  return (
    <Row>
      <Col md={4} lg={3} className="d-none d-md-block p-0 m-0">
        <SideBar />
      </Col>
      <Col className="p-0 pl-5" md={8} lg={6}>
        {signInPage && <SignInForm />}
        {signUpPage && <SignUpForm />}
      </Col>
    </Row>
  );
}

export default SignInOutPage;
