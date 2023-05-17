import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Dropdown, Tabs, Button } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons'
import Header from '@/components/header'
import './home.less';
import Link from '@/common/svg/link.svg'
import Image from '@/common/svg/image.svg'
import Voice from '@/common/svg/voice.svg'
import Attachment from '@/common/svg/attachment.svg'
import BotImg from '@/common/svg/bot.svg'
import LikeBox from '@/components/likebox'

const { Content } = Layout

const menus = [
    {
      label: 'Clicking me will not close the menu.',
      key: '1',
    },
    {
      label: 'Clicking me will not close the menu also.',
      key: '2',
    },
    {
      label: 'Clicking me will close the menu.',
      key: '3',
    },
]

const tabs = [
    {
        key: '1',
        label: `文本`,
        children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `图文`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `视频`,
      children: `Content of Tab Pane 3`,
    },
]


const Home = () => {
    
    return (
        <Fragment>
            <Layout>
                <Header />
                <Content className="home-container bg-[#F7F7F7] font-sans">
                    <div className='h-full w-full flex flex-col items-center'>

                        {/* 对话内容 */}
                        <div className='flex-1 overflow-y-scroll w-full px-8'>
                            <div className='chat-item flex right'>
                                <div className='message text-sm'>什么是区块链？</div>
                            </div>
                            <div className='chat-item flex left'>
                                <img className='w-10 avatar' src={BotImg} alt="" />
                                <div className='message text-sm'>
                                    <Tabs defaultActiveKey="1" items={tabs}/>
                                    <LikeBox/>
                                </div>
                            </div>
                        </div>

                        {/* 底部按钮区 */}
                        <div className='flex items-center w-full px-8 pb-5'>
                            <Dropdown menu={{ items: menus }} trigger={['click']} placement="top">
                                <button className='text-base bg-black text-white py-3 px-8 rounded-xl flex items-center'>
                                    <p className='mr-4'>任务类型</p><PlayCircleFilled className='transform rotate-90'/>
                                </button>
                            </Dropdown>
                            <div className='bg-white rounded-xl flex-1 overflow-hidden py-3 px-4 mx-4 flex items-center gap-x-3'>
                                <input type="text" className='h-[1.5rem] flex-1 outline-none'/>
                                <img src={Image} className='w-6 cursor-pointer hover:opacity-60' />
                                <img src={Voice} className='w-6 cursor-pointer hover:opacity-60' />
                                <img src={Attachment} className='w-6 cursor-pointer hover:opacity-60' />
                                <img src={Link} className='w-6 cursor-pointer hover:opacity-60' />
                            </div>
                            <button className='text-base bg-black text-white py-3 px-8 rounded-xl'>发送</button>
                        </div>
                    </div>
                </Content>
            </Layout>
            
        </Fragment>
    )
}

export default Home
