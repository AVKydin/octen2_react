import axios, {AxiosError} from "axios";
import {IAuthModel} from "../models/IAuthModel";
import {IToken} from "../models/IToken";
import {retriveLocalStorageData} from "./helpers/helpers";
import {ICarModel} from "../models/ICarModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
})

axiosInstance.interceptors.request.use(request => {
    if(localStorage.getItem('tokenPair') === ''){
        return request
    } else if(localStorage.getItem('tokenPair') && (request.url !== '/auht' && request.url !== "/auht/refresh")) {
        const iTokenPair = retriveLocalStorageData<IToken>('tokenPair')
        request.headers.set('Authorization', 'Bearer ' + iTokenPair.access)
    }

    return request;
})

const authService = {
    authentication: async (authData:IAuthModel): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<IToken>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.log(e);
        }
        return !!(response?.data?.access && response.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        try {
            const res = await axiosInstance.post<IToken>("/auth/refresh", {refresh: refreshToken})
            localStorage.setItem('tokenPair', JSON.stringify(res.data))
        } catch (e) {
            console.log(e)
        }

    }
}

const carService = {
    getAllCars: async (page: string): Promise<ICarModel | undefined> => {
        try {
            const res = await axiosInstance.get<ICarModel>('/cars', {params:{page: page}});
            console.log(res.data)
            return res.data;
        } catch (e) {
            const axiosError = e as AxiosError;
            if(axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorageData<IToken>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                // await carService.getAllCars(page);
            }
        }
    }
}

export {
    authService,
    carService
}
