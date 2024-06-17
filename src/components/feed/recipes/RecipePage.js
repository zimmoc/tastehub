import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import appStyles from '../../../styles/App.module.css';
import SideBar from '../../sidebar/SideBar';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../../api/axiosDefaults';
import Recipe from './Recipe';

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: recipe }] = await Promise.all([
          axiosReq.get(`/recipes/${id}`),
        ]);
        setRecipe({ results: [recipe] });
        console.log(recipe);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row>
      <Col xs={12} lg={3} className="m-0 p-0 d-none d-lg-block">
        <SideBar />
      </Col>
      <Col xs={12} lg={6} className="m-0 p-0 pl-3">
        <Recipe {...recipe.results[0]} setRecipes={setRecipe} recipePage />
      </Col>
    </Row>
  );
}

export default RecipePage;
