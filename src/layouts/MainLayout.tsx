import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {PosterPreviewPage} from "../pages";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};