import {createContext, FC, PropsWithChildren, useState} from 'react';
import {ISetState} from "../types/setStateType";


interface IDarkMode{
    darkMode: boolean,
    setDarkMode: ISetState<boolean>
}
const DarkModeContext=createContext<IDarkMode|null>(null)
interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {
    const [darkMode, setDarkMode] = useState<boolean>(false)


    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export {
    ContextProvider,
    DarkModeContext
};