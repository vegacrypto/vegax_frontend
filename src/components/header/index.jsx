import React, { Component, Fragment } from "react";
import { Layout, Avatar, Dropdown } from 'antd'
import { MessageOutlined, BellOutlined, SettingOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { setToken } from '@/store/module/user.js'
import { removeToken } from '@/utils/auth'
import LOGO from '@/common/svg/logo.svg'
import Arrow from '@/common/svg/downarrow.svg'
import './index.less'

const { Header } = Layout
const menus = [
    {
        key: '1',
        label: 'Logout',
        className: '',
    },
    {
        key: '2',
        label: 'options02',
        className: '',
    },
]



const HeaderComponent = () => {
    const loginState = useSelector((state) => state.user.loginState)
    const dispatch = useDispatch()
    const history = useHistory()

    const onClick = (e) => {
        if (e.key == 1) { // logout
            dispatch(setToken(''))
            removeToken()
            history.push('/login')
        }
    }

    return (
        <Header className='header-container bg-white h-16 flex items-center pl-8 pr-6'>
            <div className='text-lg font-bold flex items-center'><img className='w-10 mr-2' src={LOGO} alt="" /><span>AI Router</span> </div>
            <div className='flex items-center ml-auto gap-x-6'>
                <MessageOutlined className='cursor-pointer'/>
                <BellOutlined className='cursor-pointer'/>
                <SettingOutlined className='cursor-pointer'/>
            </div>
            <Dropdown menu={{ items: menus, onClick: onClick }} placement="bottomRight">
                <div className="flex items-center cursor-pointer ml-4">
                    <Avatar size="36" />
                    <img src={Arrow} className="w-2 ml-2" alt="" />
                </div>
            </Dropdown>
        </Header>
    )
}

export default HeaderComponent
