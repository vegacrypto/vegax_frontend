import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { setToken, setUser } from '@/store/module/user.js'
import { Button, Form, Input, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { login } from '@/api'

const Login = () => {
    // store
    const token = useSelector((state) => state.user.token)
    const dispatch = useDispatch()
    // data
    const [loginType, setLoginType] = useState('login');
    const [loading, setLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, title) => {
        api[type]({
            message: title,
            duration: 2
        });
    };
    const history = useHistory()

    const onFinish = (params) => {
        setLoading(true)
        login({
            ...params
        }).then((res) => {
            if (res.code == 100) {
                dispatch(setToken(res.data.token))
                dispatch(setUser(res.data))
                history.push('home')
                openNotificationWithIcon('success', res.msg)
            } else {
                openNotificationWithIcon('error', res.msg)
            }
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log('err:', err)
        });
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    const emailValidator = (_, value) => {
        if (!value || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject('Invalid email format');
    };

    return (
        <Fragment>
            {contextHolder}
            <Form
                className='login-form'
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            validator: emailValidator 
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="passwd"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            min: 6,
                            message: 'Password should be at least 6 characters',
                        }
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                
                <Form.Item
                    style={{textAlign: 'center'}}
                >
                    <Button loading={loading} size='large' type="primary" htmlType="submit" style={{padding: '0px 24px', borderRadius: '12px',}}> Login </Button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}

export default Login
