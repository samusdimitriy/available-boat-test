import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ConfigProvider } from 'antd';
import { customTheme } from './theme';
import 'antd/dist/reset.css';
import 'antd-mobile/es/global';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={customTheme}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
