import React, {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";
import {Stars} from "../StarsRatingContainer";
import css from "./MovieInfo.module.css"
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movieInfo: IMovie
}

const MovieInfo: FC<IProps> = ({movieInfo}) => {
    const {id,genre_ids,  poster_path,  original_title, title , overview, popularity, release_date, vote_count, vote_average} = movieInfo;
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
                    <div>genre_ids: {genre_ids.join(',')}</div>
                    <p>{overview}</p>
                </div>

            </div>
        </div>

    );
};

export {MovieInfo};