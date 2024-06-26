import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Recipe from '../feed/recipes/Recipe';
import { CurrentUserProvider } from '../../contexts/CurrentUserContext';
import { ProfileDataProvider } from '../../contexts/ProfileDataContext';

const mockSetRecipes = jest.fn();

const defaultProps = {
  id: 1,
  owner: 'postington',
  profile_id: 2,
  profile_image:
    'https://res.cloudinary.com/dpokxro3u/image/upload/v1/media/images/1_artuz9',
  comments_count: 4,
  likes_count: 10,
  like_id: null,
  title: 'Delicious Recipe',
  description: 'This is a great recipe for testing.',
  image:
    'https://res.cloudinary.com/dpokxro3u/image/upload/v1/media/images/1_artuz9',
  updated_at: '25 Jun 2024',
  recipePage: false,
  setRecipes: mockSetRecipes,
};

test('renders Recipe component', async () => {
  await act(async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <ProfileDataProvider>
            <Recipe {...defaultProps} />
          </ProfileDataProvider>
        </CurrentUserProvider>
      </Router>
    );
  });

  await waitFor(() => {
    expect(screen.getByText('Delicious Recipe')).toBeInTheDocument();
    expect(
      screen.getByText('This is a great recipe for testing.')
    ).toBeInTheDocument();
    expect(screen.getByAltText('Delicious Recipe')).toBeInTheDocument();
  });
});
