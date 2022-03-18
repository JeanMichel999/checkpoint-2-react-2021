
import Game from './Game';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./GameList.css"

const GameList = () => {

    const [note, setnote] = useState(false)

    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://apis.wilders.dev/wild-games/games/")
            .then((response) => {
                setGameList(response.data)
            })
    }, [])

    /* fonction pour trier */
    const trier = () => {
        setnote(!note)
    }

    /* Fonction pour supprimer la carte */
    const sortedCard = (id) => {
        const selectCard = gameList.filter(game => {
            return game.id !== id
        })
        setGameList(selectCard)
    }


    return (
        <div className='gameList'>
            {/* Trier les notes et afficher le message */}
            <button onClick={trier}> {!note ? 'Trier les jeux dont la note est supérieure à 4.5' : 'Afficher tous les jeux'}</button>
            <ul className='gameList-list'>

                {/*On vient de creer une propos - on envoie jeu vers jeu vers Game 
   Ne pas oublier la key qui doit-etre unique
   */}
                {gameList.filter((filtrer) => !note || filtrer.rating >= 4.5).map((game) => {
                    return <Game key={game.id} game={game} onDelete={sortedCard} />
                }
                )
                }
            </ul>
        </div>
    );
};

export default GameList;