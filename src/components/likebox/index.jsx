import React, { Fragment, useState, useEffect } from "react";
import { Button, Dropdown, notification, Spin, message } from 'antd'
import Icon, { PlayCircleFilled } from '@ant-design/icons'
import { setop } from '@/api'
import Share from '@/common/svg/share.svg'
import './index.less'

const LikeBox = (props) => {
    const [source, setSource] = useState('');
    const [botAnswer, setBotAnswer] = useState('');
    const [taskCode, setTaskCode] = useState('');
    const [chatid, setChatid] = useState('');
    const [botsList, setBotsList] = useState('');
    const [opState, setOpState] = useState('');

    const [isActive, setIsActive] = useState(false);

    const [api, contextHolder] = notification.useNotification();
    const [messageApi, contextMessageHolder] = message.useMessage();


    const handleSourceClick= (e) => {
        let obj = botsList.filter(v => {
            return e.key == v.key
        })[0]
        setSource(obj.label)
        setBotAnswer(obj.content)
        setTaskCode(obj.taskcode)
        setChatid(obj.id)
    }

    const comingSoonFun = () => {
        api['warning']({
            message: 'Notification',
            description: 'Coming soon!'
        })
    }

    const handleOp = () => {
        setop({
            chat_id: chatid
        }).then(res => {
            if (res.code == 100) {
                setOpState(res.data.Op)
                setIsActive(true)
            } else {
                messageApi.open({
                    type: 'error',
                    content: res.msg,
                })
            }
        })
    }

    useEffect(() => {
        let dropList = props.list.map(v => {
            return {
                id: v.Id,
                chatid: v.ChatId,
                content: v.Content,
                taskcode: v.TaskCode,
                label: v.Source,
                key: v.Id,
                op: v.Op
            }
        })
        setBotsList(dropList)
        if (dropList?.length > 0) {
            setSource(dropList[0].label)
            setBotAnswer(dropList[0].content)
            setTaskCode(dropList[0].taskcode)
            setOpState(dropList[0].op)
            setChatid(dropList[0].id)
        }
    }, [props.list])


    return (
        <Fragment>
            {contextHolder}
            {contextMessageHolder}
            {
                botsList?.length > 0 ? (
                    <Fragment >
                        <div className="title flex items-center pt-2 mb-2 uppercase"><div className="item py-2">{taskCode}</div></div>
                        <div>{botAnswer}</div>
                        <div className='flex items-center text-xs mt-8'>
                            <Button onClick={comingSoonFun} className='bg-[#EAF4F0] text-[#268D61] rounded-full flex items-center px-4 py-2'><img className='w-4 mr-1' src={Share}/><span>Share</span></Button>
                            <div className='border border-[#EAF4F0] flex items-center px-4 py-2 rounded-full ml-2 relative'>
                                <svg onClick={handleOp} className={(opState == 1) ? 'text-green-500 mr-1 -mt-1 cursor-pointer' : 'text-gray-400 mr-1 -mt-1 cursor-pointer'} width="13" height="13" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path id="like" d="M3.5 8.29999V17.7C3.5 17.866 3.36595 18 3.19995 18H1.5C0.672 18 0 17.328 0 16.5V9.5C0 8.672 0.672 8 1.5 8H3.19995C3.36495 8 3.5 8.13399 3.5 8.29999ZM14.8979 6H10.998V2.76001C10.998 1.76001 10.498 0.82002 9.65796 0.27002C9.38796 0.0900195 9.07795 0 8.77795 0C8.14795 0 7.53797 0.380029 7.29797 1.03003L5.01294 7.95398C5.00294 7.98398 4.99805 8.01597 4.99805 8.04797V17.7C4.99805 17.866 5.13197 18 5.29797 18H12.897C14.907 18 15.3369 17.17 15.7469 15.95L17.7469 9.95001C18.3979 8.01001 17.9079 6 14.8979 6Z" fill="currentColor"/>
                                </svg>
                                <span className={`anima-ele text-[#FF6B00] absolute -top-1 left-2 ${isActive ? 'active' : ''}`}>+2积分</span>
                                <div>已设为最优，您将获得 <span className='text-[#FF6B00]'>2积分</span></div>
                            </div>
                            <div className='ml-auto'>数据来源</div>
                            <Dropdown menu={{ items: botsList, onClick: handleSourceClick }} trigger={['click']} placement="bottom">
                                <button className={`dropdown-button flex items-center ml-2 ${botsList?.length > 1 ? 'special' : ''}`}>
                                    <span className='mr-4'>{source}</span><PlayCircleFilled className='transform rotate-90'/>
                                </button>
                            </Dropdown>
                        </div>
                    </Fragment>
                ):
                (
                    <div className="text-center py-8">
                        <Spin/>
                    </div>
                )
            }
        </Fragment>
    )
}

export default LikeBox
