import React from 'react';
import './Game.css'
import { Link } from 'react-router-dom';

/*On créé notre props pour récupérer notre jeu de GameList*/
const Game = (props) => {
    /*On fait du destruturing c'est à dire que props.game = game */
    const { game } = props
    /* console.log(game) pour vérifier le contenu récupéré */

    return (
        <div className='card'>
            
            <ul>
                <div className="info_container">
                <li className='jeu'><h1>Le Jeu : {game.name} </h1></li>
                    <li className='jeu'><h2>Sa Référence : {game.id} </h2></li>
                    <img src={game.background_image} alt={game.genres.name} />
                    <li className='jeu'><h3>Sa date de réalisation : {game.released}</h3></li>
                    <li className='jeu'>Style de jeu : {game.genres[0].name} </li>
                    <li className='jeu'><h3>Sa Note : {game.rating} /5 </h3></li>

                    <Link to={{ pathname: `/games/${game.id}`, }}><h3>Découvrir la fiche complète de {game.name}</h3></Link> 

                    <button className='button' onClick={() => props.onDelete(props.game.id)}>Supprimer la fiche {game.name}</button>
                </div>
            </ul>
        </div>
    );
};

export default Game;