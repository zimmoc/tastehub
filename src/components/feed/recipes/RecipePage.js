import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import appStyles from '../../../styles/App.module.css';
import commentStyles from '../../../styles/CommentCreateEditForm.module.css';
import SideBar from '../../sidebar/SideBar';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../../api/axiosDefaults';
import Recipe from './Recipe';
import CommentCreateForm from '../../comments/CommentCreateForm';
import { useCurrentUser } from '../../../contexts/CurrentUserContext';
import Comment from '../../comments/Comment';
import InfiniteScroll from 'react-infinite-scroll-component';
import Asset from '../../Asset';
import { fetchMoreData } from '../../../utils/utils';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';

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
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Row>
      <Col md={4} lg={3} className="m-0 p-0 pr-3 d-none d-md-block">
        <SideBar />
      </Col>
      <Col md={8} lg={6} className="m-0 p-0">
        {recipe.results.length > 0 && (
          <>
            <Recipe {...recipe.results[0]} setRecipes={setRecipe} recipePage />
            <Card
              className={`${appStyles.Card} p-3 d-block d-lg-none m-0 mb-3`}>
              <Card.Body>
                <IngredientsList ingredients={recipe.results[0].ingredients} />
              </Card.Body>
            </Card>
            <Card className={`${appStyles.Card} p-3`}>
              <Card.Body>
                <InstructionsList
                  instructions={recipe.results[0].instructions}
                />
              </Card.Body>
            </Card>
          </>
        )}

        <Container className={`mb-5 mt-3 ${commentStyles.Container}`}>
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
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setRecipe={setRecipe}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>No comments yet, be the first to comment! </span>
          ) : (
            <span>No comments yet!</span>
          )}
        </Container>
      </Col>
      <Col xs={12} lg={3} className="m-0 p-0 pl-3 d-none d-lg-block">
        {recipe.results.length > 0 && (
          <Card className={`${appStyles.Card}`}>
            <Card.Body>
              <IngredientsList ingredients={recipe.results[0].ingredients} />
            </Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  );
}

export default RecipePage;
