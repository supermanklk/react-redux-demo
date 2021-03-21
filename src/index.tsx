import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//配置Router
import { HashRouter as Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import { renderRoutes } from 'react-router-config';

//引入配置的routes
// import Routes from './routes';

// 配置redux
import { Provider } from 'react-redux';
import createStoreWithMdware from './store/index';
import reducers from './reducer/index';
//创建store
import 'antd/dist/antd.css';
const store = createStoreWithMdware(reducers);


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <div>
        <Provider store = {store}>
            <App />
        </Provider>
    </div>

    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
