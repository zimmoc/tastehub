import React from 'react';
import css from '../../styles/TopBar.module.css';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function TopBar() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar className="m-0 p-0 mb-2 ml-1 mr-1">
            <Container className={css.TopBar}>
              <Nav className={`mr-auto text-left`}>
                <NavLink
                  exact
                  className={css.NavLink}
                  activeClassName={css.Active}
                  to="/">
                  Explore
                </NavLink>
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
              </Nav>
              <Col className={`d-flex justify-content-end ${css.SortBy}`}>
                Sort by <i class="fa-solid fa-sort-down ml-1"></i>
              </Col>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default TopBar;
