import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

export const userService = {
    getAllUsers: async ():Promise<IUser[]> => {
        const res = await axiosInstance.get<IUser[]>(urls.users.base)
        return res.data
    },
    getUserById: async (userId: string):Promise<IUser> => {
        const res = await axiosInstance.get<IUser>(urls.users.userById(+userId))
        return res.data
    }
}
export const postService = {
    getAllPosts: async ():Promise<IPost[]> => {
        const res = await axiosInstance.get<IPost[]>(urls.posts.base)
        return res.data
    },
    getPostById: async (postId: string):Promise<IPost> => {
        const res = await axiosInstance.get<IPost>(urls.users.userById(+postId))
        return res.data
    }
}
