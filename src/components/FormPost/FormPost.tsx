import React from 'react';
import {useForm} from "react-hook-form";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {isVisible} from "@testing-library/user-event/dist/utils";

interface IPostProps {
    userId: number,
    title: string,
    body: string
}

const FormPost = () => {

    let {register, handleSubmit, formState:{errors, isValid}} = useForm<IPostProps>()

    const send = (formValues:IPostProps) =>{

    }


    return (
        <div>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" {...register("title")}/>
                <br/>
                <input type="text" {...register("body")}/>
                <br/>
                <input type="text" {...register("userId")}/>
                <br/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default FormPost;
