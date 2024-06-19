import React, { useEffect, useState } from 'react';
import SideBar from '../components/sidebar/SideBar';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import css from '../styles/Homepage.module.css';
import appStyles from '../styles/App.module.css';
import Recipe from '../components/feed/recipes/Recipe';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../api/axiosDefaults';
import TopBar from '../components/feed/TopBar';

import NoResults from '../assets/no-results.png';
import Asset from '../components/Asset';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../utils/utils';

function HomePage({ message, filter = '' }) {
  const [recipes, setRecipes] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axiosReq.get(
          `/recipes/?${filter}search=${query}`
        );
        setRecipes(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchRecipes();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col md={4} lg={3} className="d-none d-md-block p-0 m-0 pr-3">
        <SideBar />
      </Col>
      <Col className="p-0 pl-3 pr-3" md={8} lg={6}>
        <TopBar />
        <i className={`fas fa-search ${css.SearchIcon}`} />
        <Form
          className={css.SearchBar}
          onSubmit={(event) => event.preventDefault()}>
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2 mt-0 pt-0"
            placeholder="Search recipes"
          />
        </Form>
        {hasLoaded ? (
          <>
            {recipes.results.length ? (
              <InfiniteScroll
                children={recipes.results.map((recipe) => (
                  <Recipe key={recipe.id} {...recipe} setRecipes={setRecipes} />
                ))}
                dataLength={recipes.results.length}
                loader={<Asset spinner />}
                hasMore={!!recipes.next}
                next={() => fetchMoreData(recipes, setRecipes)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col lg={3} className="d-none d-lg-block p-0 pl-3">
        <Card className={css.Card}>
          <Card.Body>Right Sidebar Content</Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default HomePage;
