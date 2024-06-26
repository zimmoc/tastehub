import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import { axiosRes } from '../../api/axiosDefaults';
import btnStyles from '../../styles/Button.module.css';
import appStyles from '../../styles/App.module.css';
import PropTypes from 'prop-types';

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: 'now',
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={appStyles.CustomInput}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={`${btnStyles.Button} ${btnStyles.Orange}`}
          onClick={() => setShowEditForm(false)}
          type="button">
          cancel
        </button>
        <button
          className={`${btnStyles.Button} ${btnStyles.Orange}`}
          disabled={!content.trim()}
          type="submit">
          save
        </button>
      </div>
    </Form>
  );
}

CommentEditForm.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  setShowEditForm: PropTypes.func.isRequired,
  setComments: PropTypes.func.isRequired,
};

export default CommentEditForm;
