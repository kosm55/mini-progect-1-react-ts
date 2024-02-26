import React, {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";
import {Stars} from "../StarsRatingContainer";
import css from "./MovieInfo.module.css"
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movieInfo: IMovie
}

const MovieInfo: FC<IProps> = ({movieInfo}) => {
    const {id,backdrop_path, poster_path, original_language, original_title, title , genre_ids, overview, popularity, video , release_date, vote_count, vote_average, adult} = movieInfo;
    const navigate = useNavigate();



    return (
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            <div className={css.MovieInfoMain}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                <div className={css.MovieInfo}>
                    <h1>{title} ({release_date.split('-')[0]})</h1>
                    <h4>({original_title})</h4>
                    <Stars vote_average={vote_average}/>
                    <div>rating from users: {vote_average} ({vote_count} voices)</div>
                    <div>genre_ids: {genre_ids}</div>
                    <p>{overview}</p>
                </div>

            </div>
        </div>

    );
};

export {MovieInfo};