import {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../interfaces/genreInterface";
import css from "./GenreBadge.module.css"
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const { name} = genre;
    return (
        <div>
            <NavLink to={`/movies/genre/${name}`}><span className={css.Badge}>{name}</span></NavLink>
        </div>
    );
};

export {GenreBadge};