import axios, {AxiosResponse} from "axios";
import {IPostModel, IPostModelRequest} from "../models/IPostModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
})

const postPost = async (formValues:IPostModel):Promise<AxiosResponse<IPostModelRequest>> =>{
    return await axiosInstance.post('/posts', formValues)
}

export {
    postPost
}
