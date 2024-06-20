import React, { useEffect, useState } from 'react';
import appStyles from '../../styles/App.module.css';
import btnStyles from '../../styles/Button.module.css';
import styles from '../../styles/PopularProfiles.module.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../Asset';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PopularProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });
  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          '/profiles/?ordering=-followers_count'
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && 'd-lg-none text-center mb-3'
      }`}>
      {popularProfiles.results.length ? (
        <>
          <p className="p-0 m-0 p-2">Most followed creators</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 5).map((profile) => (
                <Link key={profile.id} to={`/profiles/${profile.id}`}>
                  <Avatar src={profile.image} height={50} />
                  <p key={profile.id} className={styles.Link}>
                    {profile.name ? profile.name.split(' ')[0] : profile.owner}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <Container className={`${styles.Container} p-1`}>
              {popularProfiles.results.slice(0, 5).map((profile) => (
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
                          {profile.followers_count} Followers
                        </p>
                      </Col>
                    </Link>
                    <Col className="d-flex justify-content-end p-0 m-0 ml-auto mr-2">
                      <Button
                        className={`${styles.Button} p-0 m-0 d-flex justify-content-center align-items-center`}
                        onClick={() => {}}>
                        Follow
                      </Button>
                    </Col>
                  </Row>
                </Container>
              ))}
            </Container>
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
