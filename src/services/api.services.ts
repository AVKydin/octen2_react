import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})

const userApiService = {
    getAllUsers: ():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users")
    },
    getPostsOfUser: (id:string):Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`/users/${id}/posts`)
    },
    getAllPosts: ():Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get("/posts")
    },
    getCommentsOfPost: (id:string):Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(`/posts/${id}/comments`)
    },
    getAllComments: ():Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get("/comments")
    }
}

export {
    userApiService
}
