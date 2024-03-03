import {useContext} from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {DarkModeContext} from "../../hoc/ContextProvider";
import icon from "./icon/icons8-account-50.png"


const Header = () => {
    const darkModeContext = useContext(DarkModeContext);
    const {darkMode, setDarkMode} = darkModeContext;

    const switchDarkMode = (): void => {
        setDarkMode(prevMode => !prevMode)
    }


    return (
        <div className={darkMode ? css.HeaderDark : css.Header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <div className={css.addBlockOfbutt}>
                <div className={css.login}>
                    <NavLink to={'login'}>Log In</NavLink>
                    <img src={icon} alt="account"/>
                </div>
                <button className={darkMode ? css.btnDark : css.btn}
                        onClick={switchDarkMode}>{darkMode ? 'on' : 'off'}</button>
            </div>
        </div>
    );
};

export {Header};