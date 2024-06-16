import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import css from './styles/App.module.css';
import './api/axiosDefaults';
import SignInOutPage from './pages/SignInOutPage';
import { Container } from 'react-bootstrap';
import PostCreateForm from './components/feed/posts/PostCreateForm';

function App() {
  return (
    <div className={css.App}>
      <Container className={css.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/signup" render={() => <SignInOutPage />} />
          <Route exact path="/signin" render={() => <SignInOutPage />} />
          <Route exact path="/following" render={() => <HomePage />} />
          <Route exact path="/liked" render={() => <HomePage />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
