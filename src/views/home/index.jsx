import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Dropdown, Button, Input, message, Checkbox } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons'
import { chatHistory, chatSave, taskList, chatById } from '@/api'
import Header from '@/components/header'
import Link from '@/common/svg/link.svg'
import Image from '@/common/svg/image.svg'
import Voice from '@/common/svg/voice.svg'
import Attachment from '@/common/svg/attachment.svg'
import BotImg from '@/common/svg/bot.svg'
import LikeBox from '@/components/likebox'
import './home.less';

const { Content } = Layout
const { TextArea } = Input;

const Home = () => {
    const [historyData, setHistoryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sendLoading, setSendLoading] = useState(false);
    const [inputDisabeld, setInputDisabeld] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [entercode, setEntercode] = useState('');
    const [taskCode, setTaskCode] = useState('text');

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
    const onCheckboxChange = (e) => {
        setEntercode(e.target.checked ? 1 : '')
    }
    const handleMenuTypeClick = (e) => {
        setTaskCode(e.key)
    }
    const scrollToBottom = () => {
        let el = document.getElementsByClassName(`chat-item`)
        el[el.length - 1]?.scrollIntoView({ //没有写Boolean参数 ,默认是true;
            behavior: "smooth",
            block: "center", 
            inline: "start"	
        })
    }

    const cycleBotsFun = async (chatId, Expect) => {
        const intervalId = setInterval(async () => {
            try {
                const response = await chatById({ chat_id: chatId });
                const data = await response.data
                
                // 判断返回值，如果满足条件则停止请求
                if (data && data.length > 0 && (Expect == data.length)) {
                    // 停止重复请求
                    clearInterval(intervalId);
                    setInputDisabeld(false)
                   
                    setHistoryData(prevData => {
                        const updatedData = prevData.map((item, index) => {
                          if (index === prevData.length - 1) {
                            // 更新特定对象的属性值
                            return {
                              ...item,
                              bots: data
                            };
                          }
                          return item;
                        });
                        return updatedData;
                    });

                    setTimeout(() => {
                        scrollToBottom()
                    }, 600)
                    
                }
            } catch (error) {
                // 处理错误
                console.error(error);
            }
        }, 700)
    }

    const handleSaveChat = () => {
        if (!prompt) {
            return;
        }

        setSendLoading(true)
        chatSave({
            'prompt': prompt,
            'task_code': taskCode,
            'external': entercode,
        }).then(async res => {
            if (res.code == 100) {
                setHistoryData(prevData => {
                    prevData.push({
                        ...res.data,
                        bots: []
                    })
                    return prevData;
                });
                setSendLoading(false)
                setPrompt('')
    
                if (res.data.Status == 0) {
                    setInputDisabeld(true)
                }
                
                setTimeout(() => {
                    scrollToBottom()
                }, 600)
                
                cycleBotsFun(res.data.Id, res.data.Expect)
            } else {
                setSendLoading(false)
                messageApi.open({
                    type: 'error',
                    content: res.msg,
                })
            }

        }).catch(err => {
            console.log('err:', err)
            setSendLoading(false)
        })
    }

    useEffect(() => {
        
        chatHistory().then(res => {
            if (res.code == 100) {
                let originalArray = res.data

                let resultArray = originalArray.reverse().reduce((acc, item) => {
                    if (item.ChatId !== 0) {
                        const matchedItem = originalArray.find(obj => obj.Id === item.ChatId);
                    
                        if (matchedItem) {
                            const matchedIndex = acc.findIndex(obj => obj.Id === item.ChatId);
                        
                            if (matchedIndex !== -1) {
                                acc[matchedIndex].bots.push(item);
                            } else {
                                acc.push({ ...matchedItem, bots: [item] });
                            }
                        }
                    }
                
                    return acc;
                }, []);
                setHistoryData(resultArray)

                setTimeout(() => {
                    scrollToBottom()
                }, 600)
            }
        })

        taskList().then(res => {
            if (res.code == 100) {
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
                                (historyData || []).map((item, index) => {
                                    return <div key={index}>
                                        <div className='chat-item flex right'>
                                            <div className='message text-sm'>{item.Content}</div>
                                        </div>
                                        {
                                            item.bots 
                                                ? <div className='chat-item flex left'>
                                                        <img className='w-10 avatar' src={BotImg} alt="" />
                                                        <div className='message text-sm'>
                                                            <LikeBox list={item.bots || []}/>
                                                        </div>
                                                    </div> 
                                                : ''
                                        }
                                        
                                    </div>
                                })
                            }
                        </div>

                        {/* 底部按钮区 */}
                        <div className='bottom-container flex items-end w-full px-8 pb-4 pt-2'>
                            <Dropdown menu={{ items: menus, onClick: handleMenuTypeClick }} trigger={['click']} placement="top">
                                <Button type="primary" className='text-base py-3 px-8 rounded-xl flex items-center'>
                                    <div className='mr-4 uppercase'>{taskCode}</div><PlayCircleFilled className='transform rotate-90'/>
                                </Button>
                            </Dropdown>
                            <div className='bg-white rounded-xl flex-1 overflow-hidden py-3 px-4 mx-4 flex items-end gap-x-3'>
                                <TextArea autoSize={{
                                    minRows: 1,
                                    maxRows: 3,
                                }} disabled={inputDisabeld} value={prompt} onChange={handlePromptChange} bordered={false} className='h-[1.5rem] flex-1 outline-none'/>
                                {/* 图片、链接等类型 */}
                                {/* <img src={Image} className='w-6 cursor-pointer hover:opacity-60' />
                                <img src={Voice} className='w-6 cursor-pointer hover:opacity-60' />
                                <img src={Attachment} className='w-6 cursor-pointer hover:opacity-60' />
                                <img src={Link} className='w-6 cursor-pointer hover:opacity-60' /> */}
                            </div>
                            <div className='mr-2 checkbox-box py-2 pl-5 pr-3 rounded-full select-none'>
                                <Checkbox onChange={onCheckboxChange}>实时数据</Checkbox>
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
