import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import css from './styles/App.module.css';
import './api/axiosDefaults';
import SignInOutPage from './pages/SignInOutPage';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className={css.App}>
      <div className={css.Container}>
        <SideBar />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/signup" render={() => <SignInOutPage />} />
          <Route exact path="/signin" render={() => <SignInOutPage />} />
          <Route exact path="/following" render={() => <HomePage />} />
          <Route exact path="/liked" render={() => <HomePage />} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
