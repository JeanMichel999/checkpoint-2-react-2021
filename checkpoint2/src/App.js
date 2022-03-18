import './App.css';
import GameList from './components/GameList';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import GameDetails from './components/GameDetails';

function App() {
  return (
    <div className="App">
      <Header name="Jean-Michel Pailherey WCS School 2022" />
      <Routes>
        <Route exact path="/" element={<GameList />} />

        <Route path="/games/:id" element={<GameDetails />} />

      </Routes>
    </div>
  );
}

export default App;
