/* eslint-disable camelcase */
/* The line above is for properties comming from the API */

import { Link } from 'react-router-dom';

export default function Game({
  game: { name, id, background_image, rating },
  removeGame,
}) {
  return (
    <div className="game-card">
      <Link to={`/games/${id}`}>
        <span className="game-title">
          {name} ({rating} / 5)
        </span>

        <img src={background_image} alt={name} />
      </Link>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeGame(id)}
      >
        Remove
      </button>
    </div>
  );
}
