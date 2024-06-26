import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { NavLink } from 'react-router-dom';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../../contexts/CurrentUserContext';
import axios from 'axios';
import Avatar from '../Avatar';
import css from '../../styles/SideBar.module.css';
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../assets/logo.png';
import { removeTokenTimestamp } from '../../utils/utils';

function SideBar() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const location = useLocation();
  const [profileLoading, setProfileLoading] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleSignOut = async () => {
    try {
      await axios.post('/dj-rest-auth/logout/');
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchProfileData = async () => {
      if (currentUser && !currentUser.profile && !profileLoading) {
        setProfileLoading(true);
        try {
          const { data: profileData } = await axios.get(
            `/profiles/${currentUser.pk}`
          );
          setCurrentUser((prevUser) => ({
            ...prevUser,
            profile: profileData,
          }));
        } catch (error) {
          console.error(
            'An error occurred while fetching profile data:',
            error
          );
        } finally {
          if (isMounted) {
            // Ensure setState is only called if component is mounted
            setProfileLoading(false);
          }
        }
      }
    };

    fetchProfileData();
    return () => {
      isMounted = false; // Set flag to false when component is unmounted
    };
  }, [currentUser, setCurrentUser, profileLoading]);

  const loggedOutIcons = (
    <>
      <Col className="d-flex flex-column">
        <Card className={`${css.Card} mb`}>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Avatar src={Logo} height={100} className="pr-3" />
            <p className={`${css.ProfileName} m-0 pt-2 pb-3`}></p>
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
            isActive('/', '/following', '/liked') ? css.NavItemActive : ''
          }`}>
          <NavLink
            to="/"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i className="fas fa-house pr-3" />
            Home
          </NavLink>
        </Container>
        <Container className={`${css.NavItem}`}>
          <NavLink
            to="/signup"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            onClick={handleSignOut}>
            <i className="fas fa-user-plus pr-3" />
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
              src={currentUser?.profile_image || Logo}
              height={100}
              className="pr-3"
            />
            <p
              className={`${css.ProfileName} m-0 pt-2 ${
                !currentUser?.profile?.name ? 'pb-3' : ''
              }`}>
              {currentUser?.profile?.name
                ? currentUser?.profile?.name
                : currentUser?.username}
            </p>
            {currentUser?.profile?.name && (
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
            isActive('/') ? css.NavItemActive : ''
          }`}>
          <NavLink
            exact
            to="/"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i className="fas fa-house pr-3" />
            Home
          </NavLink>
        </Container>
        <Container
          className={`${css.NavItem} ${
            isActive('/following') ? css.NavItemActive : ''
          }`}>
          <NavLink
            exact
            to="/following"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i className="fas fa-user-group pr-3" />
            Following
          </NavLink>
        </Container>
        <Container
          className={`${css.NavItem} ${
            isActive('/liked') ? css.NavItemActive : ''
          }`}>
          <NavLink
            exact
            to="/liked"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i className="fas fa-heart pr-3" />
            Liked
          </NavLink>
        </Container>
        <Container
          className={`${css.NavItem} ${
            isActive('/recipes') ? css.NavItemActive : ''
          }`}>
          <NavLink
            exact
            to="/recipes"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i className="fas fa-book-bookmark pr-3" />
            My Recipes
          </NavLink>
        </Container>
        <Container
          className={`${css.NavItem} ${
            isActive('/recipes/create') ? css.NavItemActive : ''
          }`}>
          <NavLink
            to="/recipes/create"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100`}
            activeClassName={css.ActiveLink}>
            <i className="fa-regular fa-square-plus pr-3" />
            Create Recipe
          </NavLink>
        </Container>
        <Container className={`${css.NavItem}`}>
          <NavLink
            to="/"
            className={`${css.NavLink} d-flex justify-content-start align-items-center h-100 pt-5`}
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
