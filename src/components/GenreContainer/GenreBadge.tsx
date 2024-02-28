import {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../interfaces/genreInterface";
import css from "./GenreBadge.module.css"

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <div ><span className={css.Badge}>{name}</span></div>
        </div>
    );
};

export {GenreBadge};