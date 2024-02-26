import {FC, PropsWithChildren} from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"

interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'login'}>Login</NavLink>
        </div>
    );
};

export {Header};