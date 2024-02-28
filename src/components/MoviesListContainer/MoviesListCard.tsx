import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {Stars} from "../StarsRatingContainer";
import css from "./MoviesListCard.module.css"

interface IProps{
    movie: IMovie,

}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id, poster_path,  title , genre_ids, vote_average} = movie;

    const navigate = useNavigate();
    return (
        <div className={css.MoviesListCard} onClick={()=>navigate('/info', {state: {movie}})}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <h3>{title}</h3>
            <Stars vote_average={vote_average}/>
        </div>
    );
};

export {MoviesListCard};