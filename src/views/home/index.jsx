import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Dropdown, Tabs, Button, Input, message } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons'
import { chatHistory, chatSave, taskList } from '@/api'
import Header from '@/components/header'
import Link from '@/common/svg/link.svg'
import Image from '@/common/svg/image.svg'
import Voice from '@/common/svg/voice.svg'
import Attachment from '@/common/svg/attachment.svg'
import BotImg from '@/common/svg/bot.svg'
import LikeBox from '@/components/likebox'
import './home.less';

const { Content } = Layout

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
    const [historyData, setHistoryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sendLoading, setSendLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [messageApi, contextHolder] = message.useMessage();

    const [menus, setMenus] = useState([]);

    const handlePromptChange = (e) => {
        setPrompt(e.target.value)
    }
    const handlePressEnter = (e) => {
        if (e.key === 'Enter') {
            handleSaveChat()
        }
    }

    const handleSaveChat = () => {
        if (!prompt) {
            return;
            // messageApi.open({
            //     type: 'warning',
            //     content: 'This is a success message',
            // });
        }
        setSendLoading(true)
        chatSave({
            'prompt': prompt,
            'task_code': 'text'
        }).then(res => {
            setSendLoading(false)
            setPrompt('')
        }).catch(err => {
            console.log('err:', err)
            setSendLoading(false)
        })
    }

    useEffect(() => {
        chatHistory().then(res => {
            if (res.code == 100) {
                setHistoryData(res.data)
            }
        })

        taskList().then(res => {
            if (res.code == 100) {
                console.log(res.data)
                setMenus(res.data)
            }
        })
    }, [currentPage])
    
    return (
        <Fragment>
            {contextHolder}
            <Layout>
                <Header />
                <Content className="home-container bg-[#F7F7F7] font-sans">
                    <div className='h-full w-full flex flex-col items-center'>

                        {/* 对话内容 */}
                        <div className='flex-1 overflow-y-scroll w-full px-8'>
                                {
                                    historyData.map((v, i) => {
                                        return <div key={i} className='chat-item flex right'>
                                            <div className='message text-sm'>{v.Content}</div>
                                        </div>
                                    })
                                }
                            <div className='chat-item flex left'>
                                <img className='w-10 avatar' src={BotImg} alt="" />
                                <div className='message text-sm'>
                                    <Tabs defaultActiveKey="1" items={tabs}/>
                                    <LikeBox/>
                                </div>
                            </div>
                        </div>

                        {/* 底部按钮区 */}
                        <div className='bottom-container flex items-center w-full px-8 pb-5'>
                            <Dropdown menu={{ items: menus }} trigger={['click']} placement="top">
                                <Button type="primary" className='text-base py-3 px-8 rounded-xl flex items-center'>
                                    <div className='mr-4'>任务类型</div><PlayCircleFilled className='transform rotate-90'/>
                                </Button>
                            </Dropdown>
                            <div className='bg-white rounded-xl flex-1 overflow-hidden py-3 px-4 mx-4 flex items-center gap-x-3'>
                                <Input value={prompt} onPressEnter={handlePressEnter} onChange={handlePromptChange} bordered={false} className='h-[1.5rem] flex-1 outline-none'/>
                                <img src={Image} className='w-6 cursor-pointer hover:opacity-60' />
                                <img src={Voice} className='w-6 cursor-pointer hover:opacity-60' />
                                <img src={Attachment} className='w-6 cursor-pointer hover:opacity-60' />
                                <img src={Link} className='w-6 cursor-pointer hover:opacity-60' />
                            </div>
                            <Button onClick={handleSaveChat} loading={sendLoading} type="primary" className='py-3 px-8 rounded-xl'>发送</Button>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Fragment>
    )
}

export default Home
