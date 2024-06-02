import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../../validators/postValidator";
import {IPostModel} from "../../models/IPostModel";
import {postPost} from "../../services/sendPost.service";



const FormPost = () => {

    let {
        register,
        handleSubmit,
        formState:{errors, isValid},
        reset
    } = useForm<IPostModel>({mode: "all", resolver: joiResolver(postValidator)})

    const send = (formValues:IPostModel) =>{
        console.log(formValues)
        const res = postPost(formValues).then(value => console.log(value.data))
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" {...register("title")} placeholder="Enter title"/>
                {
                    errors.title && <span>{errors.title.message}</span>
                }
                <br/>
                <input type="text" {...register("body")} placeholder="Enter body"/>
                {
                    errors.body && <span>{errors.body.message}</span>
                }
                <br/>
                <input type="text" {...register("userId")} placeholder="Enter userId"/>
                {
                    errors.userId && <span>{errors.userId.message}</span>
                }
                <br/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default FormPost;
