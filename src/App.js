import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import css from './styles/App.module.css';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';

function App() {
  return (
    <div className={css.App}>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route render={() => <p>Page not found</p>} />
      </Switch>
    </div>
  );
}

export default App;
