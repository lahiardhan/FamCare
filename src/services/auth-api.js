import axios from "axios";

const ROOT_API = 'https://bwa-storegg-server.up.railway.app';
const API_VERSION = 'api/v1'

export async function setLogin(data) {
    const ENDPOINT = 'auth/signin';

    const response = await axios.post(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`, data).catch((err) => err.response);
    if (response.status > 300) {
        const res = {
            error: true,
            message: response.data.message,
            data: null,
        };
        return res;
    }
    const res = {
        error: false,
        message: 'success',
        data: response.data.data,
    }
    return res;
}

export async function setSignUp(data) {
    const ENDPOINT = 'auth/signup';

    const response = await axios.post(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`, data).catch((err) => err.response);
    const axiosResponse = response.data;
    if (axiosResponse?.error === 1) {
        return axiosResponse;
    }
    return axiosResponse.data;
}