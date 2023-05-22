import React, { Fragment } from "react";
import { Button, Form, Input, Row, Col, notification } from 'antd';
import { register } from '@/api'

const Register = ({ onDataChange }) => {

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, title) => {
        api[type]({
            message: title,
            duration: 3
        });
    };

    const onFinish = (params) => {
        register({
            ...params
        }).then((res) => {
            if (res.code == 100) {
                openNotificationWithIcon('success', res.msg)
                onDataChange('login');
            } else {
                openNotificationWithIcon('error', res.msg)
            }
        }).catch((err) => {
            console.log('err->', err)
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
                className='register-form'
                name="register"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item>
                    <Row gutter={3}>
                        <Col span={18}>
                            <Form.Item
                                name="email"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the email',
                                    },
                                    {
                                        validator: emailValidator 
                                    }
                                ]}
                            >
                                <Input placeholder="email" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Button type='primary'>Get Code</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    name="code"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your code!',
                        },
                    ]}
                >
                    <Input placeholder="enter 1234 for testing" />
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
                    <Input.Password placeholder="password" />
                </Form.Item>
                
                <Form.Item
                    style={{textAlign: 'center'}}
                >
                    <Button size='large' type="primary" htmlType="submit" style={{padding: '0px 24px', borderRadius: '12px',}}> Register </Button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}

export default Register
