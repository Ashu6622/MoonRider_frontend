import axios from 'axios';


const api = axios.create({
    baseURL : `${import.meta.env.VITE_API_URL}/api` || "http://localhost:4000/api"
})


export const addUserData = (data) =>{
    return api.post('/user/register', data);
}

export const adminRegister = (data) =>{
    return api.post('/admin/register', data);
}

export const getUserData = ()=>{
    return api.get('/user/alluser');
}