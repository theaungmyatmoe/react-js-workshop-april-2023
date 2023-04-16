import {axiosInstance} from "@/util/axiosInstance";

export const createUser = async ({name, email, password}) => {
    try {
        const res = await axiosInstance.post('/users', {name, email, password})
        return res.data;
    } catch (e) {
        console.log(e)
    }
}


export const loginUser = async ({email, password}) => {
    try {
        const res = await axiosInstance.post('/login', {email, password})
        return res.data;
    } catch (e) {
        throw e;
    }
}
