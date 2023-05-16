import React, { Component, Fragment } from 'react';
import './index.less';

class Login extends Component {

    render() {
        return (
            <Fragment>
                <div className='login-container flex flex-col items-center justify-center'>
                    <button className='bg-[#65C26D] text-xl px-12 py-3 rounded-full text-white' onClick={() => {
                        this.gotoHome()
                    }}>Get Start</button>
                </div>
            </Fragment>
        )
    }

    gotoHome() {
        // TODO： 链接 google 登录
        this.props.history.push('/home')
    }
}
export default Login
