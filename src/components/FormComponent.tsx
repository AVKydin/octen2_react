import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthModel} from "../models/IAuthModel";
import {authService} from "../services/api.service";

const FormComponent = () => {
    const {register,
        handleSubmit
    } = useForm<IAuthModel>({defaultValues:{username: 'userSZ1', password: 'P@$$word1'}})

    const [isAuthState, setIsAuthState] = useState<boolean>(false)

    const auth = async (formData: IAuthModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth)
    }

    return (
        <div>
            {<h3>login form</h3>}
            {
                isAuthState ? <span>"ok"</span> : <span>"not ok"</span>
            }
            <form onSubmit={handleSubmit(auth)}>
                <input type="text" {...register("username")}/>
                <input type="text" {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default FormComponent;
