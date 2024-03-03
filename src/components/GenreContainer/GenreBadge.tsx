import {FC, PropsWithChildren} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from "./GenreBadge.module.css"



interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <NavLink to={`/movies/genre/${id}`}><span className={css.Badge}>{name}</span></NavLink>
        </div>
    );
};

export {GenreBadge};