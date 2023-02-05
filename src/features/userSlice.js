import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    loginUserApi,
    autologinApi,
    logoutUserApi,
    registerUserApi
} from '../api/User';

const initialState = {
    username: '',
    email: '',
    accessToken: '',
    status: 'logged out'
}

export const loginUser = createAsyncThunk(
    'user/login',
    loginUserApi
);

export const logoutUser = createAsyncThunk(
    'user/logout',
    logoutUserApi
)

export const autologin = createAsyncThunk(
    'user/autologin',
    autologinApi
)

export const registerUser = createAsyncThunk(
    'user/register',
    registerUserApi
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateAccessToken: (state, { payload }) => {
            state.accessToken = payload.accessToken;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                // console.log('here');
                // console.log(payload);
                state.status = 'logged in';
                const { username, refreshToken, accessToken, email } = payload;
                alert(`logged in as ${username}`);
                state.email = email;
                state.username = username;
                state.accessToken = accessToken;
                localStorage.setItem('devdarshan_jwt', refreshToken);
            })
            .addCase(loginUser.rejected, (state) => {
                state.status = 'logged out';
                alert('some error occured');
            })
            .addCase(autologin.pending, (state, { payload }) => {
                state.status = 'loading';
            })
            .addCase(autologin.fulfilled, (state, { payload }) => {
                state.status = 'logged in';
                const { username, accessToken, email } = payload;
                state.email = email;
                state.username = username;
                state.accessToken = accessToken;
                // localStorage.setItem('devdarshan_jwt',refreshToken);
            })
            .addCase(autologin.rejected, (state) => {
                state.status = 'logged out';
            })
            .addCase(registerUser.fulfilled, () => {
                alert('user regitered');
            })
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.username = state.email = state.accessToken = '';
                state.status = 'logged out';
                alert('logged out user');
            })

    }
});

export default userSlice.reducer;
export const {
    updateAccessToken
} = userSlice.actions;