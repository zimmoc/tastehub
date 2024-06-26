import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Asset from '../components/Asset';
import NoResults from '../assets/no-results.png';

import styles from '../styles/ProfilePage.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import PopularProfiles from '../components/profiles/PopularProfiles';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import SideBar from '../components/sidebar/SideBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  useProfileData,
  useSetProfileData,
} from '../contexts/ProfileDataContext';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../api/axiosDefaults';
import InfiniteScroll from 'react-infinite-scroll-component';
import Recipe from '../components/feed/recipes/Recipe';
import { fetchMoreData } from '../utils/utils';
import { ProfileEditDropdown } from '../components/MoreDropDown';
import Avatar from '../components/Avatar';

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileRecipes, setProfileRecipes] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileRecipes }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}`),
            axiosReq.get(`/recipes/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileRecipes(profileRecipes);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Card className={`${appStyles.Card} p-2 pb-3`}>
        <Card.Body className="p-0 pl-3 pr-3 pt-3">
          {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
          <Row className="align-items-center justify-content-between p-0">
            <Col className="text-lg-left">
              <Avatar src={profile?.image} height={100} />
            </Col>
            <Col xs="auto" className="text-center">
              <h4 className="m-2">
                {!profile?.name && <span style={{ color: '#B0B0B0' }}>@</span>}
                {profile?.name ? profile?.name : profile?.owner}
              </h4>
              {profile?.name && (
                <p className={`m-0 pb-3 ${styles.ProfileAt}`}>
                  @{profile?.owner}
                </p>
              )}
              <Row className="d-flex justify-content-center">
                <Col xs="auto" className="my-2 text-center">
                  <div>{profile?.recipes_count}</div>
                  <div>recipes</div>
                </Col>
                <Col xs="auto" className="my-2 text-center">
                  <div>{profile?.followers_count}</div>
                  <div>followers</div>
                </Col>
                <Col xs="auto" className="my-2 text-center">
                  <div>{profile?.following_count}</div>
                  <div>following</div>
                </Col>
              </Row>
            </Col>
            <Col className="text-lg-right">
              {currentUser &&
                !is_owner &&
                (profile?.following_id ? (
                  <Button
                    className={`${btnStyles.Button} ${btnStyles.Black}`}
                    onClick={() => handleUnfollow(profile)}>
                    unfollow
                  </Button>
                ) : (
                  <Button
                    className={`${btnStyles.Button} ${btnStyles.Orange}`}
                    onClick={() => handleFollow(profile)}>
                    follow
                  </Button>
                ))}
            </Col>
            {profile?.bio && (
              <Row className="pl-3 pr-3 w-100">
                <Col>
                  <hr />
                  {profile.bio}
                </Col>
              </Row>
            )}
          </Row>
        </Card.Body>
      </Card>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr className="w-50" style={{ backgroundColor: '#F38A29' }} />
      <p className="text-center">
        {profile?.name ? profile?.name.split(' ')[0] : profile?.owner}
        &apos;s recipes
      </p>
      <hr className="w-50" style={{ backgroundColor: '#F38A29' }} />

      {profileRecipes.results.length ? (
        <InfiniteScroll
          dataLength={profileRecipes.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileRecipes.next}
          next={() => fetchMoreData(profileRecipes, setProfileRecipes)}>
          {profileRecipes.results.map((recipe) => (
            <Recipe
              key={recipe.id}
              {...recipe}
              setRecipes={setProfileRecipes}
            />
          ))}
        </InfiniteScroll>
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col
        md={4}
        lg={3}
        className={`${appStyles.SideColumn} d-none d-md-block p-0 m-0`}>
        <SideBar />
      </Col>
      <Col className={`${appStyles.MiddleColumn} p-0 pl-3 pr-3`} md={8} lg={6}>
        <PopularProfiles mobile={true} />
        {hasLoaded ? (
          <>
            {mainProfile}
            {mainProfilePosts}
          </>
        ) : (
          <Asset spinner />
        )}
      </Col>
      <Col
        lg={3}
        className={`${appStyles.SideColumn}d-none d-lg-block p-0 pl-1`}>
        <Card className={appStyles.Card}>
          <PopularProfiles mobile={false} />
        </Card>
      </Col>
    </Row>
  );
}

export default ProfilePage;
