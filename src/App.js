import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameList from './screens/GameList';
import GameDetails from './screens/GameDetails';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header websiteName="Wild games" />
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/games/:id" component={GameDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
