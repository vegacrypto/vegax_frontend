import React, { Fragment } from "react";
import { Dropdown } from 'antd'
import { PlayCircleFilled } from '@ant-design/icons'
import Share from '@/common/svg/share.svg'
import Like from '@/common/svg/like.svg'

const items = [
    {
        label: 'Clicking me will',
        key: '2',
    },
    {
        label: 'Clicking me will close the menu.',
        key: '3',
    },
]

const LikeBox = () => {
    return (
        <div className='flex items-center text-xs mt-8'>
            <button className='bg-[#EAF4F0] text-[#268D61] rounded-full flex items-center px-4 py-2'><img className='w-4 mr-1' src={Share}/><span>Share</span></button>
            <div className='border border-[#EAF4F0] flex items-center px-4 py-2 rounded-full ml-2'>
                <img src={Like} className='w-3 mr-1' />
                <div>已设为最优解，您将获得 <span className='text-[#FF6B00]'>2积分</span></div>
            </div>
            <div className='ml-auto'>数据来源</div>
            <Dropdown menu={{ items: items }} trigger={['click']} placement="bottom">
                <button className='border border-[#EAF4F0] py-2 px-2 rounded-full flex items-center ml-2'>
                    <span className='mr-4'>ChatGPT</span><PlayCircleFilled className='transform rotate-90'/>
                </button>
            </Dropdown>
        </div>
    )
}

export default LikeBox
