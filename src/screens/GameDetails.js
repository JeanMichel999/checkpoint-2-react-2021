/* eslint-disable camelcase */
/* The line above is for properties comming from the API */
import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

export default function GameDetails() {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => setGameDetails(res.data));
  }, [id]);

  if (!gameDetails) return 'loading details';

  const {
    name,
    background_image,
    rating,
    genres,
    released,
    short_screenshots,
  } = gameDetails;

  return (
    <div className="game-details-container">
      <h1>{name}</h1>
      <img style={{ width: '100%' }} src={background_image} alt={name} />
      <p> Rated : {rating} / 5</p>
      <p>Genres : {genres.map((genre) => genre.name).join(', ')}</p>
      <p>Released on : {dayjs(released).format('LL')}</p>

      <p>Screenshots : </p>

      <div className="screenshots-container">
        {short_screenshots.map((s) => {
          return <img key={s.id} src={s.image} alt="screenshot of the game" />;
        })}
      </div>
    </div>
  );
}
