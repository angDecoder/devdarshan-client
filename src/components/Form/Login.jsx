import React,{ useEffect, useRef } from "react";
import './From.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/userSlice';
import { Navigate, NavLink } from "react-router-dom";

function Login(){

    const emailRef = useRef();
    const passRef = useRef();
    const dispatch = useDispatch();

    const status = useSelector(state=>state.user.status);

    useEffect(()=>{
        emailRef.current.focus();
    },[])

    const submitHandler = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        dispatch(loginUser({email,password}));
        console.log(email,password);
        clearInput(e);
    }

    const clearInput = (e)=>{
        e.preventDefault();
        emailRef.current.value = '';
        passRef.current.value = ''
    }

    if( status==='logged in' )
        return <Navigate to={'/'} />

    return (
        <form className="Form">
            <h1>Login User</h1>
            <input ref={emailRef} type="text" className="input" placeholder="Email" />
            <input ref={passRef} type="password" className="input" placeholder="Password" />
            <div>
                <button onClick={submitHandler} className="Form__btn submit">Submit</button>
                <button onClick={clearInput} className="Form__btn clear">Clear</button>
            </div>

            <NavLink className={'nav__link '} to={'/register'}>Not Registered ?</NavLink>
        </form>
    )
}

export default Login;