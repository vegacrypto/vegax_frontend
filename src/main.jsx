import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@/common/css/index.css';

import { Provider } from "react-redux";
import store from '@/store';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // 在App组件外包一层Provider
    <Provider store={store}>
        <App />
    </Provider>
)
