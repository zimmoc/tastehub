import React, { createContext, useContext, useEffect, useState } from 'react';
import { axiosReq, axiosRes } from '../api/axiosDefaults';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { followHelper, unfollowHelper } from '../utils/utils';
import PropTypes from 'prop-types';

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleFollow = async (clickedProfile) => {
    try {
      const { data } = await axiosRes.post('/followers/', {
        followed: clickedProfile.id,
      });

      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnfollow = async (clickedProfile) => {
    try {
      await axiosRes.delete(`/followers/${clickedProfile.following_id}`);

      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchProfile = async (profileId) => {
    if (!profileData[profileId]) {
      try {
        const { data } = await axiosReq.get(`/profiles/${profileId}`);
        setProfileData((prevState) => ({
          ...prevState,
          [profileId]: data,
        }));
      } catch (err) {
        // console.log(err);
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          '/profiles/?ordering=-followers_count'
        );
        if (isMounted) {
          setProfileData((prevState) => ({
            ...prevState,
            popularProfiles: data,
          }));
        }
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
    return () => {
      isMounted = false;
    };
  }, [currentUser]);

  return (
    <ProfileDataContext.Provider value={{ ...profileData, fetchProfile }}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}>
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};

ProfileDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
