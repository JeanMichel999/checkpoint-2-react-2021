import axios from 'axios';
import { useEffect, useState } from 'react';
import Game from '../components/Game';

export default function GameList() {
  const [gameList, setGameList] = useState([]);
  const [bestGameFilterIsActive, setBestGameFilterIsActive] = useState(false);

  useEffect(() => {
    axios.get('https://wild-games.jsrover.wilders.dev/games').then((res) => {
      // console.log(res.data);
      setGameList(res.data);
    });
  }, []);

  const toggleBestGamesFilter = () => {
    setBestGameFilterIsActive((isActive) => !isActive);
  };

  const removeGame = (id) => {
    setGameList((games) => games.filter((game) => game.id !== id));
  };

  return (
    <>
      <div className="filter-btn-container">
        <button type="button" onClick={toggleBestGamesFilter}>
          {bestGameFilterIsActive ? 'Show all games' : 'Show best games'}
        </button>
      </div>

      <div className="game-list-container">
        {gameList
          .filter((game) => !bestGameFilterIsActive || game.rating > 4.5)
          .map((game) => (
            <Game key={game.id} removeGame={removeGame} game={game} />
          ))}
      </div>
    </>
  );
}
