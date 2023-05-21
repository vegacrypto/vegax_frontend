import React, { Fragment, useEffect } from "react";
import { ConfigProvider, theme } from 'antd';
import { Route, Switch, Redirect, BrowserRouter, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Home from '@/views/home'
import Login from '@/views/login'

import './index.css'

// 用于判断是否存在 token
const PrivateRoute = ({ component: Component, token, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          token ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
};


function App() {
    const token = useSelector((state) => state.user.token)

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#333333',
                    controlOutline: 'rgba(0, 0, 0, 0.1)',
                    colorBgTextHover: 'rgba(255, 255, 255, 0.9)'
                },
            }}
        >
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute
                        path="/home"
                        component={Home}
                        token={token}
                    />
                    <PrivateRoute
                        path="/"
                        component={Home}
                        token={token}
                    />
                </Switch>
            </BrowserRouter>
        </ConfigProvider>
    )
}

export default App
