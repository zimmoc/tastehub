import React, { useEffect, useState } from 'react';
import styles from '../../styles/Comment.module.css';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Media from 'react-bootstrap/Media';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { MoreDropdown } from '../MoreDropDown';
import { axiosRes } from '../../api/axiosDefaults';
import CommentEditForm from './CommentEditForm';
import { useProfileData } from '../../contexts/ProfileDataContext';
import PropTypes from 'prop-types';

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setRecipe,
    setComments,
  } = props;
  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}`);
      setRecipe((prevRecipe) => ({
        results: [
          {
            ...prevRecipe.results[0],
            comments_count: prevRecipe.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <div className="pl-2 pr-2">
      <hr style={{ backgroundColor: '#4B4A4A' }} />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{ownerName}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </div>
  );
};

Comment.propTypes = {
  profile_id: PropTypes.number.isRequired,
  profile_image: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setRecipe: PropTypes.func.isRequired,
  setComments: PropTypes.func.isRequired,
};

export default Comment;
