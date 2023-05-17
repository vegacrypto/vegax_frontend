import React, { Component, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { setLoginState } from '@/store/module/user.js'
import './index.less';


const Login = () => {
    const loginState = useSelector((state) => state.user.loginState)
    const dispatch = useDispatch()
    const history = useHistory()

    const gotoHome = () => {
        dispatch(setLoginState(1))
        history.push('/home')
    }

    return (
        <Fragment>
            <div className='login-container flex flex-col items-center justify-center'>
                <button className='bg-[#65C26D] text-xl px-12 py-3 rounded-full text-white' onClick={() => {
                    gotoHome()
                }}>Get Start</button>
            </div>
        </Fragment>
    )
}
export default Login
