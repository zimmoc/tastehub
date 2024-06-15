import React from 'react';
import css from '../../styles/Feed.module.css';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function TopBar() {
  return (
    <Col md={{ span: 6, offset: 3 }} fixed="top">
      <Navbar>
        <Container>
          <Nav className="mr-auto text-left">
            <NavLink
              className={css.NavLink}
              activeClassName={css.Active}
              to="/">
              Explore
            </NavLink>
            <NavLink
              className={css.NavLink}
              activeClassName={css.Active}
              to="/following">
              Following
            </NavLink>
            <NavLink
              className={css.NavLink}
              activeClassName={css.Active}
              to="/liked">
              Liked
            </NavLink>
          </Nav>
          <Col className={`d-flex justify-content-end ${css.SortBy}`}>
            Sort by <i class="fa-solid fa-sort-down ml-1"></i>
          </Col>
        </Container>
      </Navbar>
    </Col>
  );
}

export default TopBar;
