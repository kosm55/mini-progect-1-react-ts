import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            Auth
            <Outlet/>
        </div>
    );
};

export {AuthLayout};