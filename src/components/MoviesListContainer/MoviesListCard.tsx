import React, {FC, useContext, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {Stars} from "../StarsRatingContainer";
import css from "./MoviesListCard.module.css"
import {IGenre} from "../../interfaces/genreInterface";
import {GenreBadge} from "../GenreContainer";
import {GenreContext} from "../../hoc/ContextProvider";

interface IProps {
    movie: IMovie,

}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id, poster_path, title, genre_ids, vote_average} = movie;
    // const [{id:id_genre,name}]=genres
    const genres = useContext(GenreContext)

    const showGenreOfMovie = (genres: IGenre[], genre_ids: number[]): React.ReactNode[] => {
        return genre_ids.map((id_genre: number) => {
            const genre= genres.find(item => item.id === id_genre)
            return <GenreBadge key={id_genre} genre={genre}/>
        })
    }

    const navigate = useNavigate();
    return (
        <div className={css.MoviesListCard}>
            <div className={css.GenreBadge}>{ showGenreOfMovie(genres, genre_ids )}</div>
            <div  onClick={() => navigate(`/movies/${id}/${title}/info`, {state: {movie}})}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                <h3>{title}</h3>
                <Stars vote_average={vote_average}/>
            </div>
        </div>

    );
};

export {MoviesListCard};