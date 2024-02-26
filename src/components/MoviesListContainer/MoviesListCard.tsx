import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {Stars} from "../StarsRatingContainer";
import css from "./MoviesListCard.module.css"



interface IProps{
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id,backdrop_path, poster_path, original_language, original_title, title , genre_ids, overview, popularity, video , release_date, vote_count, vote_average, adult} = movie;

    const navigate = useNavigate();
    return (
        <div className={css.MoviesListCard} onClick={()=>navigate('/info', {state: {movie}})}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <h3>{title}</h3>
            <Stars vote_average={vote_average}/>

            {/*<div>id: {id}</div>*/}
            {/*<img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}/>*/}
            {/*<div>genre_ids: {genre_ids}</div>*/}
            {/*<div>overview: {overview}</div>*/}

        </div>
    );
};

export {MoviesListCard};