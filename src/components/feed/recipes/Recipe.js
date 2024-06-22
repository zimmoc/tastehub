import React, { useEffect, useState } from 'react';
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
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../../contexts/CurrentUserContext';
import Avatar from '../../Avatar';
import { axiosReq, axiosRes } from '../../../api/axiosDefaults';
import { MoreDropdown } from '../../MoreDropDown';
import { useProfileData } from '../../../contexts/ProfileDataContext';

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
    setRecipes,
    name,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const [ownerName, setOwnerName] = useState(owner);
  const { fetchProfile, ...profiles } = useProfileData();

  useEffect(() => {
    const getProfileName = async () => {
      if (profile_id && !profiles[profile_id]) {
        await fetchProfile(profile_id);
      }
      if (profiles[profile_id]) {
        setOwnerName(profiles[profile_id].name || owner);
      }
    };

    getProfileName();
  }, [profiles, profile_id, fetchProfile, owner]);

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post('/likes/', { recipe: id });
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? {
                ...recipe,
                likes_count: recipe.likes_count + 1,
                like_id: data.id,
              }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}`);
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? { ...recipe, likes_count: recipe.likes_count - 1, like_id: null }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    history.push(`/recipes/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/recipes/${id}`);
      history.goBack();
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Card className={css.Recipe}>
      <Card.Body className="p-0 pl-3 pr-3 pt-3">
        <Row className="align-items-center justify-content-between p-0">
          <Col xs="auto" className="pr-1">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={50} />
            </Link>
          </Col>
          <Col className="d-flex flex-column pl-0">
            <Link to={`/profiles/${profile_id}`}>
              <span className={css.Owner}>
                {ownerName} <span className={css.AtName}>@{owner}</span>
              </span>
            </Link>

            <span className={css.UpdatedAt}>{updated_at}</span>
          </Col>
          <Col className="d-flex justify-content-end align-items-center pr-3">
            <Button
              className={`${btnStyles.Button} ${btnStyles.Orange} mr-3`}
              onClick={() => {}}>
              Follow
            </Button>
            {is_owner && recipePage && (
              <MoreDropdown
                className="m-0 p-0 ml-0"
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </Col>
        </Row>
      </Card.Body>
      <Card.Body className="p-0 pl-3 pr-3">
        <Col className="pl-1 pr-1 pt-1">
          {title && (
            <Card.Title className={css.RecipeTitle}>{title}</Card.Title>
          )}
          {/* <hr className="p-0 m-0 pb-2" /> */}
          {description && (
            <Card.Text className={css.RecipeDescription}>
              {description}
            </Card.Text>
          )}
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
              <i className={`far fa-heart ${css.Icon}`} />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${css.IconSet}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${css.Icon}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like recipes!</Tooltip>}>
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          <span className={css.Counts}>{likes_count}</span>
          <Link to={`/recipes/${id}`}>
            <i className={`fa-regular fa-message ${css.Icon}`}></i>
          </Link>
          <span className={css.Counts}>{comments_count}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
