import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import css from './styles/App.module.css';

function App() {
  return (
    <div className={css.App}>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
