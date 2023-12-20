import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const register = async (data) => {
    
    const res = await axios.post('/users/signup', data);
    setAuthHeader(res.data.token);
    return res.data;
}

export const logIn = async (data) => {
   
    const res = await axios.post('/users/login', data);
    setAuthHeader(res.data.token);
    return res.data;
   
};

export const logout = async () => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        console.log(error);
    }
};

export const refreshUser = async (token) => {

    setAuthHeader(token);
    try {
        const res = await axios.get('/users/current');
        return res.data;
    } catch (error) {
        console.log(error);
    };
};
