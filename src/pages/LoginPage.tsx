import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const LoginPage: FC<IProps> = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            LoginPage
        </div>
    );
};

export {LoginPage};