import React, { Fragment } from "react";
import { ConfigProvider, theme } from 'antd';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Home from '@/views/home'
import Login from '@/views/login'

import './index.css'

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#333',
                },
            }}
        >
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Redirect to={"/home"} />
                </Switch>
            </BrowserRouter>
        </ConfigProvider>
    )
}

export default App
