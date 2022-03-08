import axios from "axios";

export const api = axios.create({
    // baseURL:'http://localhost:55520/api/'
    baseURL:'http://minhaapi.local/api/'
});


export default api