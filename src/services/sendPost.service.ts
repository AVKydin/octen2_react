import axios, {AxiosResponse} from "axios";
import {IPostModel, IPostModelResponse} from "../models/IPostModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
})

const postPost = (formValues:IPostModel):Promise<AxiosResponse<IPostModelResponse>> =>{
    return axiosInstance.post('/posts', formValues)
}

export {
    postPost
}
