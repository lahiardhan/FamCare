import axios from "axios";

export async function setSignup(data) {
    const response = await axios.post('https://bwa-storegg-web-server.herokuapp.com/api/v1/auth/signup', data);
    const axiosResponse = response.data;

    return axiosResponse.data;
}

export async function setLogin() {
    return null;
}