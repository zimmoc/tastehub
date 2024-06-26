import React, { useEffect, useState } from 'react';
import Recipe from '../components/feed/recipes/Recipe';
import SideBar from '../components/sidebar/SideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import css from '../styles/Homepage.module.css';
import appStyles from '../styles/App.module.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../api/axiosDefaults';
import TopBar from '../components/feed/TopBar';

import NoResults from '../assets/no-results.png';
import Asset from '../components/Asset';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../utils/utils';
import PopularProfiles from '../components/profiles/PopularProfiles';
import PropTypes from 'prop-types';

function HomePage({ message, filter }) {
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
    fetchRecipes();
  }, [filter, query, pathname]);

  return (
    <Row>
      <Col
        md={4}
        lg={3}
        className={`d-none d-md-block p-0 m-0 ${appStyles.SideColumn}`}>
        <SideBar />
      </Col>
      <Col className={`p-0 pl-3 pr-3 ${appStyles.MiddleColumn}`} md={8} lg={6}>
        <PopularProfiles mobile={true} className="pb-2" />
        <Container className={`p-0 pb-2 ${appStyles.StickyTop}`}>
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
        </Container>
        {hasLoaded ? (
          <>
            {recipes.results.length ? (
              <InfiniteScroll
                dataLength={recipes.results.length}
                loader={<Asset spinner />}
                hasMore={!!recipes.next}
                next={() => fetchMoreData(recipes, setRecipes)}>
                {recipes.results.map((recipe) => (
                  <Recipe key={recipe.id} {...recipe} setRecipes={setRecipes} />
                ))}
              </InfiniteScroll>
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
      <Col lg={3} className="d-none d-lg-block p-0 pl-1">
        <Card className={css.Card}>
          <PopularProfiles mobile={false} />
        </Card>
      </Col>
    </Row>
  );
}

HomePage.propTypes = {
  message: PropTypes.string.isRequired,
  filter: PropTypes.string,
};

HomePage.defaultProps = {
  filter: '',
};

export default HomePage;
