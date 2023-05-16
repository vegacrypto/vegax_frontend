import React, { Fragment } from "react";
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Home from '@/views/home'
import Login from '@/views/login'

import './index.css'

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Redirect to={"/home"} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

export default App
