import React, { Component, Fragment } from "react";
import { Layout, Menu, Avatar } from 'antd'
import { MessageOutlined, BellOutlined, SettingOutlined } from '@ant-design/icons'
import LOGO from '@/common/svg/logo.svg'
import Arrow from '@/common/svg/downarrow.svg'
import './index.less'

const { Header } = Layout
const menus = [
    {
        key: 'information',
        label: 
            <div className="flex items-center">
                <Avatar size="36" />
                <img src={Arrow} className="w-2 ml-2" alt="" />
            </div>,
        className: 'menu-item',
        children: [
            {
                key: 'options01',
                label: 'options01',
                className: '',
            },
            {
                key: 'options02',
                label: 'options02',
                className: '',
            },
        ]
    },
]



const HeaderComponent = () => {

    const onClick = () => {
        // todo
    }

    return (
        <Header className='header-container bg-white h-16 flex items-center pl-8 pr-6'>
            <div className='text-lg font-bold flex items-center'><img className='w-10 mr-2' src={LOGO} alt="" /><span>AI Router</span> </div>
            <div className='flex items-center ml-auto gap-x-6'>
                <MessageOutlined className='cursor-pointer'/>
                <BellOutlined className='cursor-pointer'/>
                <SettingOutlined className='cursor-pointer'/>
            </div>
            <Menu onClick={() => { this.onClick() }} style={{border: 'none'}} mode="horizontal" items={menus} />
        </Header>
    )
}

export default HeaderComponent
