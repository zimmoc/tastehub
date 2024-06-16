import React from 'react';
import css from '../../styles/SideBar.module.css';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../../contexts/CurrentUserContext';
import axios from 'axios';
import Avatar from '../Avatar';

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
      <NavLink
        to="/signin"
        className={css.NavLink}
        activeClassName={css.Active}>
        Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={css.NavLink}
        activeClassName={css.Active}>
        Sign up
      </NavLink>
    </>
  );

  const loggedInIcons = (
    <>
      <NavLink className={css.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt" />
        Sign out
      </NavLink>
      <NavLink
        className={css.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}>
        <Avatar
          src={currentUser?.profile_image}
          text={currentUser?.username}
          height={40}
        />
      </NavLink>
    </>
  );

  return (
    <div className={`mr-0 ${css.SideBar}`}>
      <div className={css.Content}>
        <Card className={css.Card}>
          <Card.Body className="p-3">
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SideBar;
