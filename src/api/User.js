import axios from 'axios';

const instance  = axios.create({
    baseURL : 'http://localhost:3500'
});

export const loginUserApi = async ({email,password,thunkApi})=>{
    try {
        const res = await instance.post('/user/login', {
            email,
            password
        });

        // console.log(res?.data);

        return {...res.data.user,email};
    } catch (error) {
        thunkApi.
        console.log(error);
    }
}

export const autologinApi = async()=>{
    console.log('clicked');
    try {
        const refreshToken = localStorage.getItem('devdarshan_jwt');
        const res = await instance.post('/user/autologin', {
            refreshToken
        });
        console.log(res.data);
    } catch (error) {
        
    }
}

export const logoutUserApi = ()=>{

}