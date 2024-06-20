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
import Profile from './Profile';

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
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            <Container className={`${styles.Container} p-1`}>
              {popularProfiles.results.slice(0, 5).map((profile) => (
                <Profile key={profile.id} profile={profile} />
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
