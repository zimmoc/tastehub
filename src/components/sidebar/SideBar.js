import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../../contexts/CurrentUserContext';
import axios from 'axios';
import Avatar from '../Avatar';
import css from '../../styles/SideBar.module.css';

function SideBar() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post('/dj-rest-auth/logout/');
      setCurrentUser(null);
    } catch (err) {
      // console.log(err);
    }
  };

  const loggedOutIcons = (
    <>
      <Col className="d-flex flex-column">
        <NavLink
          to="/signin"
          className={`${css.NavLink}`}
          activeClassName={`${css.Active}`}>
          Sign in
        </NavLink>
        <NavLink
          to="/signup"
          className={`${css.NavLink}`}
          activeClassName={`${css.Active}`}>
          Sign up
        </NavLink>
      </Col>
    </>
  );

  const loggedInIcons = (
    <>
      <Col className="d-flex flex-column">
        <NavLink
          to={`/profiles/${currentUser?.profile_id}`}
          className={`${css.NavLink}`}>
          <Avatar
            src={currentUser?.profile_image}
            text={currentUser?.username}
            height={40}
          />
        </NavLink>
        <NavLink to="/posts/create" className={`${css.NavLink}`}>
          Create post
        </NavLink>
        <NavLink to="/" className={`${css.NavLink}`} onClick={handleSignOut}>
          <i className="fas fa-sign-out-alt" />
          Sign out
        </NavLink>
      </Col>
    </>
  );

  return (
    <Col className="p-0 m-0">
      <Card className={`${css.Card}`}>
        <Card.Body className="p-3">
          {currentUser ? loggedInIcons : loggedOutIcons}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SideBar;
