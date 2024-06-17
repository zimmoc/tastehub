import React from 'react';
import {
  Col,
  Card,
  Media,
  Row,
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import css from '../../../styles/Recipe.module.css';
import btnStyles from '../../../styles/Button.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../../contexts/CurrentUserContext';
import Avatar from '../../Avatar';

// function Recipe() {
//   const location = useLocation();
//   const explore = location.pathname === '/';
//   const following = location.pathname === '/following';
//   const liked = location.pathname === '/liked';
//   return (
//     <Col md={12} className={`m-0 p-3`}>
//       <Card className={css.Recipe}></Card>
//     </Col>
//   );
// }

const Recipe = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    description,
    image,
    updated_at,
    ratings_count,
    ratings_average,
    instructions,
    ingredients,
    recipePage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={css.Recipe}>
      <Card.Body className="p-0 pl-3 pr-3 pt-3">
        <Row className="align-items-center justify-content-between p-0">
          <Col xs="auto">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={50} />
            </Link>
          </Col>
          <Col className="d-flex flex-column pl-0">
            <Link to={`/profiles/${profile_id}`}>{owner}</Link>
            {updated_at}
          </Col>
          <Col className="d-flex justify-content-end align-items-center pr-3">
            <Button
              className={`${btnStyles.Button} ${btnStyles.Orange} mr-3`}
              onClick={() => {}}>
              Follow
            </Button>
            {is_owner && recipePage && (
              <i className="fa-solid fa-ellipsis-vertical"></i>
            )}
          </Col>
        </Row>
      </Card.Body>
      <Card.Body className="p-0 pl-3 pr-3">
        <Col className="pl-1 pr-1 pt-3">
          {title && <Card.Title>{title}</Card.Title>}
          {description && <Card.Text>{description}</Card.Text>}
        </Col>
      </Card.Body>
      <Link to={`/recipes/${id}`}>
        <div className={`p-3 ${css.ImageContainer}`}>
          <img src={image} alt={title} className="w-100 h-100" />
        </div>
      </Link>
      <Card.Body className="p-0 pl-3 pr-3 pb-3">
        <div className={css.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own recipe!</Tooltip>}>
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-heart ${css.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-heart ${css.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like recipes!</Tooltip>}>
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          <span>{likes_count}</span>
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          <span>{comments_count}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
