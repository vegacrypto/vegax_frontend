import React, { useState, Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './index.less';
import Login from './components/login.jsx'
import Register from './components/register.jsx'


const LoginMain = () => {
    const token = useSelector((state) => state.user.token)
    const history = useHistory()
    const [loginType, setLoginType] = useState('');

    const gotoHome = () => {
        history.push('/home')
    }

    const handleChildDataChange = (data) => {
        console.log('data->', data)
        setLoginType('login')
    }

    return (
        <Fragment>
            <div className='login-container flex flex-col items-center justify-center'>
                <div className='wrapper'>
                    { loginType == 'register' ? <Register onDataChange={handleChildDataChange} /> : <Login />}
                    <div className='text-right w-full'>
                        {
                            loginType == 'register' ? 
                            <Button onClick={() => { setLoginType('login') }} type="link">Login<RightOutlined /></Button>:
                            <Button onClick={() => { setLoginType('register') }} type="link">register<RightOutlined /></Button>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default LoginMain
