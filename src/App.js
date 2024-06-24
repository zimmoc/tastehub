import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import css from './styles/App.module.css';
import './api/axiosDefaults';
import SignInOutPage from './pages/SignInOutPage';
import { Container } from 'react-bootstrap';
import RecipeCreateForm from './components/feed/recipes/RecipeCreateForm';
import RecipePage from './components/feed/recipes/RecipePage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import RecipeEditForm from './components/feed/recipes/RecipeEditForm';
import ProfilePage from './components/profiles/ProfilePage';
import UsernameForm from './components/profiles/UsernameForm';
import UserPasswordForm from './components/profiles/UserPasswordForm';
import ProfileEditForm from './components/profiles/ProfileEditForm';
import NavBar from './components/NavBar';

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || '';

  return (
    <div className={css.App}>
      <Container className={`p-0 m-0 d-block d-md-none mb-5`}>
        <NavBar />
      </Container>
      <Container className={css.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route exact path="/signup" render={() => <SignInOutPage />} />
          <Route exact path="/signin" render={() => <SignInOutPage />} />
          <Route
            exact
            path="/following"
            render={() => (
              <HomePage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/recipes"
            render={() => (
              <HomePage
                message="No results found. Create some recipes!"
                filter={`owner__profile=${profile_id}&ordering=-recipes__created_at&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <HomePage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route
            exact
            path="/recipes/create"
            render={() => <RecipeCreateForm />}
          />
          <Route
            exact
            path="/recipes/:id/edit"
            render={() => <RecipeEditForm />}
          />
          <Route exact path="/recipes/:id" render={() => <RecipePage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
