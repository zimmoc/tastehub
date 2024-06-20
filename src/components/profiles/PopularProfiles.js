import React, { useEffect, useState } from 'react';
import appStyles from '../../styles/App.module.css';
import styles from '../../styles/PopularProfiles.module.css';
import { Container } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';
import Asset from '../Asset';
import Profile from './Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

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
