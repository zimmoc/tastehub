import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../../contexts/CurrentUserContext';
import axios from 'axios';
import Avatar from '../Avatar';
import css from '../../styles/SideBar.module.css';
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function SideBar() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const location = useLocation();
  const defaultProfileImg =
    'https://res.cloudinary.com/dpokxro3u/image/upload/v1718310153/default_profile_ioora4.jpg';

  const isActive = (path) => location.pathname === path;

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
        <Card className={`${css.Card} mb`}>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Avatar src={defaultProfileImg} height={100} className="pr-3" />
            <p className={`${css.ProfileName} m-0 pt-2 pb-3`}>TasteHub</p>
            <hr className={`${css.ProfileHr} m-0`} />
            <Button
              as={Link}
              to={`/signin`}
              className={`${css.ProfileButton} mt-2`}>
              Sign in
            </Button>
          </Card.Body>
        </Card>
        <Container
          className={`${css.NavItem} ${
            isActive('/recipes/create') ? css.NavItemActive : ''
          }`}>
          <NavLink
            to="/recipes/create"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i class="fa-regular fa-square-plus pr-3" />
            Create Recipe
          </NavLink>
        </Container>
        <Container
          className={`${css.NavItem} ${
            isActive('/', '/following', '/liked') ? css.NavItemActive : ''
          }`}>
          <NavLink
            to="/recipes/create"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i class="fas fa-th-large pr-3" />
            Feeds
          </NavLink>
        </Container>
        <Container className={`${css.NavItem}`}>
          <NavLink
            to="/"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt pr-3" />
            Sign up
          </NavLink>
        </Container>
      </Col>
    </>
  );

  const loggedInIcons = (
    <>
      <Col className="d-flex flex-column">
        <Card className={`${css.Card} mb`}>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Avatar
              src={currentUser?.profile_image}
              height={100}
              className="pr-3"
            />
            <p
              className={`${css.ProfileName} m-0 pt-2 ${
                !currentUser?.name ? 'pb-3' : ''
              }`}>
              {currentUser?.name ? currentUser?.name : currentUser?.username}
            </p>
            {currentUser?.name && (
              <p className={`${css.ProfileAt} m-0 pb-3`}>
                @{currentUser.username}
              </p>
            )}
            <hr className={`${css.ProfileHr} m-0`} />
            <Button
              as={Link}
              to={`/profiles/${currentUser?.profile_id}`}
              className={`${css.ProfileButton} mt-2`}>
              My profile
            </Button>
          </Card.Body>
        </Card>
        <Container
          className={`${css.NavItem} ${
            isActive('/recipes/create') ? css.NavItemActive : ''
          }`}>
          <NavLink
            to="/recipes/create"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i class="fa-regular fa-square-plus pr-3" />
            Create Recipe
          </NavLink>
        </Container>
        <Container
          className={`${css.NavItem} ${
            isActive('/', '/following', '/liked') ? css.NavItemActive : ''
          }`}>
          <NavLink
            to="/recipes/create"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i class="fas fa-th-large pr-3" />
            Feeds
          </NavLink>
        </Container>
        <Container className={`${css.NavItem}`}>
          <NavLink
            to="/"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt pr-3" />
            Sign out
          </NavLink>
        </Container>
      </Col>
    </>
  );

  return (
    <Col className="p-0 m-0">
      {currentUser ? loggedInIcons : loggedOutIcons}
    </Col>
  );
}

export default SideBar;
