import {useContext} from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {DarkModeContext} from "../../hoc/ContextProvider";


const Header = () => {
    const darkModeContext = useContext(DarkModeContext);

    if (!darkModeContext) {
        return null;
    }

    const { darkMode, setDarkMode } = darkModeContext;
    const switchDarkMode= ()=>{
        setDarkMode(prevMode=> !prevMode)
    }
    return (
        <div className={darkMode? css.HeaderDark: css.Header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'login'}>Your account</NavLink>
            <button className={darkMode?css.btnDark : css.btn} onClick={switchDarkMode}>{darkMode ? 'on' : 'off'}</button>
        </div>
    );
};

export {Header};