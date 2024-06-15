import React, { useContext } from 'react';
import css from '../../styles/SideBar.module.css';
import { Card } from 'react-bootstrap';
import { CurrentUserContext } from '../../App';
import { NavLink } from 'react-router-dom';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../../contexts/CurrentUserContext';
import axios from 'axios';
import { removeTokenTimestamp } from '../../utils/utils';

function SideBar() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post('/dj-rest-auth/logout/');
      setCurrentUser(null);
      removeTokenTimestamp();
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
  const loggedInIcons = <>{currentUser?.username}</>;

  return (
    <div className={`mr-0 ${css.SideBar}`}>
      <div className={css.Content}>
        <Card className={css.Card}>
          <Card.Body>{currentUser ? loggedInIcons : loggedOutIcons}</Card.Body>
          {console.log('User: ', currentUser?.username)}
        </Card>
      </div>
    </div>
  );
}

export default SideBar;
