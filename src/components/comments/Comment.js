import React from 'react';
import styles from '../../styles/Comment.module.css';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Media } from 'react-bootstrap';

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;

  return (
    <div className="pl-2 pr-2">
      <hr style={{ backgroundColor: '#4B4A4A' }} />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>
            {owner.name ? owner.name : owner}
          </span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
