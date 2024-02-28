
import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {IGenre} from "../../interfaces/genreInterface";
import {genreService} from "../../services";
import {GenreBadge} from "./GenreBadge";
import css from "./Genres.module.css"

interface IProps extends PropsWithChildren {
    genres: IGenre[]
}

const Genres: FC = () => {
    const [genres, setGenres] = useState<IProps>({genres: []})

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data))
    }, []);

    return (
        <div className={css.Genres}>
            {genres.genres.map(genre=> <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};
