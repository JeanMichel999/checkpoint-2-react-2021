import React from 'react';
import "./GameDetails.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GameDetails = (props) => {
    /*récupération de l'id */
    const { id } = useParams();
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((res) => setInfo(res.data));
    }, [id]);

    return (

        <div className='card'>
            <div className="info_container">
                <h1>Sa Référence : {info.id}</h1>
                <li className="name_title"><h2>Nom du jeu : {info.name}</h2></li>
                <img className='details_image' src={info.background_image} alt={info.name} />
                <li className="name_title" ><h3>Notes : {info.rating} / 5</h3></li>
                <li className='jeu1'><h3>Réalisé le : {info.released} </h3></li>
                <Link to="/"><button className='button'>Retour sur la liste des jeux</button></Link>
            </div>
        </div>
    );
};

export default GameDetails;