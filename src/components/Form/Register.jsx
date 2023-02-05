import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerUser } from '../../features/userSlice';

import './From.css';

function Register() {

    const emailRef = useRef();
    const passRef = useRef();
    const userRef = useRef();
    const dispatch = useDispatch();
    const status = useSelector(state => state.user.status);

    const submitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const username = userRef.current.value;
        dispatch(registerUser({ email, password, username }));
    }

    const clearInput = (e) => {
        e.preventDefault();
        emailRef.current.value = '';
        passRef.current.value = '';
        userRef.current.value = '';
    }

    useEffect(()=>{
        emailRef.current.focus();
    },[])

    return (
        <form className="Form">
            <h1>Register User</h1>

            <input ref={emailRef} type="text" className="input" placeholder="Email" />
            <input ref={userRef} type="text" className="input" placeholder="Username" />
            <input ref={passRef} type="password" className="input" placeholder="Password" />
            <div>
                <button disabled={status === 'loading'} onClick={submitHandler} className="Form__btn submit">Submit</button>
                <button disabled={status === 'loading'} onClick={clearInput} className="Form__btn clear">Clear</button>
            </div>

            <NavLink className={'nav__link '} to={'/login'}>Already Registered ?</NavLink>
        </form>
    )
}

export default Register;