import React from 'react';
import styles from '../../styles/Profile.module.css';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../Avatar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useSetProfileData } from '../../contexts/ProfileDataContext';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { profile, mobile, imageSize = 50 } = props;
  const { following_id, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <>
      {mobile ? (
        <Link key={profile.id} to={`/profiles/${profile.id}`}>
          <Avatar src={profile.image} height={imageSize} />
          <p key={profile.id} className={styles.Link}>
            {profile.name ? profile.name.split(' ')[0] : profile.owner}
          </p>
        </Link>
      ) : (
        <>
          <Container key={profile.id} className="mb-1">
            <Row className={`${styles.Profile} align-items-center`}>
              <Link
                to={`/profiles/${profile.id}`}
                className={`${styles.Link} d-flex align-items-center`}>
                <Avatar src={profile.image} height={40} />
                <Col
                  className={`${styles.ProfileText} d-flex flex-column justify-content-center pl-2`}>
                  <p className="m-0 p-0">
                    {profile.name ? profile.name : profile.owner}
                  </p>
                  <p className={`m-0 p-0 ${styles.FollowersText}`}>
                    {profile.followers_count} followers
                  </p>
                </Col>
              </Link>
              <Col className="d-flex justify-content-end p-0 m-0 ml-auto mr-2">
                {!mobile &&
                  currentUser &&
                  !is_owner &&
                  (following_id ? (
                    <Button
                      className={`${styles.Button} ${styles.ButtonFollowed} p-0 m-0 d-flex justify-content-center align-items-center`}
                      onClick={() => handleUnfollow(profile)}>
                      unfollow
                    </Button>
                  ) : (
                    <Button
                      className={`${styles.Button} p-0 m-0 d-flex justify-content-center align-items-center`}
                      onClick={() => handleFollow(profile)}>
                      follow
                    </Button>
                  ))}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    following_id: PropTypes.number,
    owner: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    followers_count: PropTypes.number,
  }).isRequired,
  mobile: PropTypes.bool,
  imageSize: PropTypes.number,
};

export default Profile;
