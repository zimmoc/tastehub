import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import styles from '../../styles/CommentCreateEditForm.module.css';
import appStyles from '../../styles/App.module.css';
import btnStyles from '../../styles/Button.module.css';
import Avatar from '../../components/Avatar';
import { axiosRes } from '../../api/axiosDefaults';
import { Button, Col, Row } from 'react-bootstrap';

function CommentCreateForm(props) {
  const { recipe, setRecipe, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post('/comments/', {
        content,
        recipe,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setRecipe((prevRecipe) => ({
        results: [
          {
            ...prevRecipe.results[0],
            comments_count: prevRecipe.results[0].comments_count + 1,
          },
        ],
      }));
      setContent('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className={`mt-2 ${styles.Container}`} onSubmit={handleSubmit}>
      <Form.Group className="mb-1">
        <Row className="pb-0">
          <Col xs="auto" className="p-0 m-0 pl-3">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profileImage} height={50} />
            </Link>
          </Col>
          <Col className="pl-1">
            <Form.Control
              className={appStyles.CustomInput}
              placeholder="Write your comment..."
              as="textarea"
              value={content}
              onChange={handleChange}
              rows={2}
              style={{ height: '50px' }}
            />
          </Col>
        </Row>
      </Form.Group>
      <button
        className={`${btnStyles.Button} ${btnStyles.Orange} d-block ml-auto`}
        disabled={!content.trim()}
        type="submit">
        Post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
