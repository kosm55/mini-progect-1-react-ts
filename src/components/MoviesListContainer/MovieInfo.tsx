import React, {FC, PropsWithChildren, useContext} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {Stars} from "../StarsRatingContainer";
import css from "./MovieInfo.module.css"
import {GenreBadge} from "../GenreContainer";
import {IGenre} from "../../interfaces";
import {GenreContext} from "../../hoc/ContextProvider";

interface IProps extends PropsWithChildren {
    movieInfo: IMovie
}

const MovieInfo: FC<IProps> = ({movieInfo}) => {
    const {genre_ids, backdrop_path, poster_path,  original_title, title , overview, release_date, vote_count, vote_average} = movieInfo;
    const navigate = useNavigate();
    const genresContext = useContext(GenreContext);


    const showGenreOfMovie = (genres: IGenre[], genre_ids: number[]): React.ReactNode[] => {
        return genre_ids.map((id_genre: number) => {
            const genre = genres.find(item => item.id === id_genre);
            return <GenreBadge key={genre.id} genre={genre} />;
        });
    };


    return (
        <div className={css.main} style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500/${backdrop_path}')`}}>
            <button onClick={()=>navigate(-1)}>back</button>
            <div className={css.MovieInfoMain} >
                <div onClick={()=>navigate(`/${title}/poster` , {state: {poster_path}})}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                </div>
                <div className={css.GenreBadge}>{showGenreOfMovie(genresContext, genre_ids)}</div>
                <div className={css.MovieInfo}>
                    <h1>{title} ({release_date.split('-')[0]})</h1>
                    <h4>({original_title})</h4>
                    <Stars vote_average={vote_average}/>
                    <div>rating from users: {vote_average} ({vote_count} voices)</div>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};