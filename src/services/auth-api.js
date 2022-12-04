import axios from "axios";

export async function setLogin(data) {
    const response = await axios.post('https://bwa-storegg-server.up.railway.app/api/v1/auth/signin', data).catch((err) => err.response);
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