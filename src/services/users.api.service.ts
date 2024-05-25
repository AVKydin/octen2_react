import axios, {AxiosResponse} from "axios";
import {IUsers} from "../components/users/Users";
import {IPostProps} from "../models/PostModel";
import {IPosts} from "../components/Posts/Posts";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
})


const getAllUsers = ():Promise<AxiosResponse<IUsers>> => {
    return axiosInstance.get('/users')
}

const getPostByUserId = (id:number):Promise<AxiosResponse<IPosts>> =>{
    return axiosInstance.get('/posts/user/' + id)
}

export {
    getAllUsers,
    getPostByUserId
}
