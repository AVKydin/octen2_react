import axios, {AxiosResponse} from "axios";
import {IUserProps} from "../models/User";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        "Content-Type": "application/json"
    }
})


const getAllUsers = ():Promise<AxiosResponse<IUserProps[]>> => {
    return axiosInstance.get('/users')
}

export {
    getAllUsers
}
