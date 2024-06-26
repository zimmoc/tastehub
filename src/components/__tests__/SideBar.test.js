import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';
import { CurrentUserProvider } from '../../contexts/CurrentUserContext';
import React from 'react';

test('renders SideBar', () => {
  render(
    <Router>
      <SideBar />
    </Router>
  );

  const signInLink = screen.getByRole('link', { name: 'Sign in' });
  expect(signInLink).toBeInTheDocument();
});

test('displays login options for logged-out users', () => {
  render(
    <Router>
      <SideBar />
    </Router>
  );

  const signInLink = screen.getByRole('link', { name: 'Sign in' });
  const signUpLink = screen.getByRole('link', { name: 'Sign up' });

  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});

test('displays profile and navigation options for logged-in users', async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <SideBar />
      </CurrentUserProvider>
    </Router>
  );

  const myProfileLink = await screen.findByRole('link', {
    name: 'My profile',
  });
  const followingLink = screen.getByRole('link', { name: 'Following' });
  const likedLink = screen.getByRole('link', { name: 'Liked' });

  expect(myProfileLink).toBeInTheDocument();
  expect(followingLink).toBeInTheDocument();
  expect(likedLink).toBeInTheDocument();
});

test('handles logout functionality correctly', async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <SideBar />
      </CurrentUserProvider>
    </Router>
  );

  const signOutLink = await screen.findByRole('link', { name: 'Sign out' });
  fireEvent.click(signOutLink);

  const signInLink = await screen.findByRole('link', { name: 'Sign in' });
  const signUpLink = await screen.findByRole('link', { name: 'Sign up' });

  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});
