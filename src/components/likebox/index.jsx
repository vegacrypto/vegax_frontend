import React, { Fragment, useState, useEffect } from "react";
import { Button, Dropdown, Tabs, Spin } from 'antd'
import { PlayCircleFilled } from '@ant-design/icons'
import Share from '@/common/svg/share.svg'
import Like from '@/common/svg/like.svg'
import './index.less'

const LikeBox = (props) => {
    const [source, setSource] = useState('');
    const [botAnswer, setBotAnswer] = useState('');
    const [taskCode, setTaskCode] = useState('');
    const [botsList, setBotsList] = useState('');

    const handleSourceClick= (e) => {
        let obj = dropList.filter(v => {
            return e.key == v.key
        })[0]
        setSource(obj.label)
        setBotAnswer(obj.content)
        setTaskCode(obj.taskcode)
    }

    useEffect(() => {
        let dropList = props.list.map(v => {
            return {
                id: v.Id,
                chatid: v.ChatId,
                content: v.Content,
                taskcode: v.TaskCode,
                label: v.Source,
                key: v.Id
            }
        })
        setBotsList(dropList)
        if (dropList?.length > 0) {
            setSource(dropList[0].label)
            setBotAnswer(dropList[0].content)
            setTaskCode(dropList[0].taskcode)
        }
    }, [props.list])


    return (
        <Fragment>
            {
                botsList?.length > 0 ? (
                    <Fragment >
                        <div className="title flex items-center pt-2 mb-2 uppercase"><div className="item py-2">{taskCode}</div></div>
                        <div>{botAnswer}</div>
                        <div className='flex items-center text-xs mt-8'>
                            <Button className='bg-[#EAF4F0] text-[#268D61] rounded-full flex items-center px-4 py-2'><img className='w-4 mr-1' src={Share}/><span>Share</span></Button>
                            <div className='border border-[#EAF4F0] flex items-center px-4 py-2 rounded-full ml-2'>
                                <img src={Like} className='w-3 mr-1' />
                                <div>已设为最优解，您将获得 <span className='text-[#FF6B00]'>2积分</span></div>
                            </div>
                            <div className='ml-auto'>数据来源</div>
                            <Dropdown menu={{ items: botsList, onClick: handleSourceClick }} trigger={['click']} placement="bottom">
                                <Button className='border border-[#EAF4F0] py-2 px-2 rounded-full flex items-center ml-2'>
                                    <span className='mr-4'>{source}</span><PlayCircleFilled className='transform rotate-90'/>
                                </Button>
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
