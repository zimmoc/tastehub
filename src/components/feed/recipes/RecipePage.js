import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import appStyles from '../../../styles/App.module.css';
import commentStyles from '../../../styles/CommentCreateEditForm.module.css';
import SideBar from '../../sidebar/SideBar';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../../api/axiosDefaults';
import Recipe from './Recipe';
import CommentCreateForm from '../../comments/CommentCreateForm';
import { useCurrentUser } from '../../../contexts/CurrentUserContext';
import Comment from '../../comments/Comment';

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: recipe }, { data: comments }] = await Promise.all([
          axiosReq.get(`/recipes/${id}`),
          axiosReq.get(`/comments/?recipe=${id}`),
        ]);
        setRecipe({ results: [recipe] });
        setComments(comments);
        console.log(recipe);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row>
      <Col xs={12} lg={3} className="m-0 p-0 pr-3 d-none d-lg-block">
        <SideBar />
      </Col>
      <Col xs={12} lg={6} className="m-0 p-0 pl-3">
        <Recipe {...recipe.results[0]} setRecipes={setRecipe} recipePage />
        <Container className={commentStyles.Container}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              recipe={id}
              setRecipe={setRecipe}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            'Comments'
          ) : null}
          {comments.results.length ? (
            comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setRecipe={setRecipe}
                setComments={setComments}
              />
            ))
          ) : currentUser ? (
            <span>No comments yet, be the first to comment! </span>
          ) : (
            <span>No comments yet!</span>
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default RecipePage;
