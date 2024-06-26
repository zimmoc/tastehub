import React from 'react';
import css from '../../styles/TopBar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

function TopBar() {
  const currentUser = useCurrentUser();

  return (
    <Navbar className={`${css.TopBar} m-0 p-0 mr-4 ml-4 mb-4`}>
      <Nav className="mr-auto text-left">
        <NavLink
          exact
          className={css.NavLink}
          activeClassName={css.Active}
          to="/">
          Explore
        </NavLink>
        {currentUser && (
          <>
            <NavLink
              exact
              className={css.NavLink}
              activeClassName={css.Active}
              to="/following">
              Following
            </NavLink>
            <NavLink
              exact
              className={css.NavLink}
              activeClassName={css.Active}
              to="/liked">
              Liked
            </NavLink>
          </>
        )}
      </Nav>
      {/* <Nav className="ml-auto">
        <span className={css.SortBy}>
          Sort by <i className="fa-solid fa-sort-down ml-1"></i>
        </span>
      </Nav> */}
    </Navbar>
  );
}

export default TopBar;
