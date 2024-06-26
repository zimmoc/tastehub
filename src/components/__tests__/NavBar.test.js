import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';
import { CurrentUserProvider } from '../../contexts/CurrentUserContext';
import React from 'react';

test('renders NavBar', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const signInLink = screen.getByRole('link', { name: 'Sign in' });
  expect(signInLink).toBeInTheDocument();
});

test('renders link to the user profile for a logged in user', async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText('Profile');
  expect(profileAvatar).toBeInTheDocument();
});

test('renders Sign in and Sign out buttons on logout', async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
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

test('renders "Create recipe" link for logged in user', async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const createRecipeLink = await screen.findByRole('link', {
    name: 'Create recipe',
  });
  expect(createRecipeLink).toBeInTheDocument();
});

test('does not render "Create recipe" link for logged out user', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const createRecipeLink = screen.queryByRole('link', {
    name: 'Create recipe',
  });
  expect(createRecipeLink).not.toBeInTheDocument();
});

test('navbar expands and collapses when toggler is clicked', async () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const navbarToggler = screen.getByRole('button', {
    name: /toggle navigation/i,
  });
  const navbarCollapse = document.getElementById('basic-navbar-nav');

  expect(navbarCollapse).not.toHaveClass('show');

  fireEvent.click(navbarToggler);
  await new Promise((resolve) => setTimeout(resolve, 300));
  expect(navbarCollapse).toHaveClass('show');

  fireEvent.click(navbarToggler);
  await new Promise((resolve) => setTimeout(resolve, 300));
  expect(navbarCollapse).not.toHaveClass('show');
});
