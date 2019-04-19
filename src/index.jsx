import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import axios from 'axios'
import reducer from '@redux/reducers'
import App from './App'
import './icon.less'
import './index.css'

axios.defaults.baseURL = '/api'
// 请求设置拦截
axios.interceptors.request.use(config => config)

// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.status >= 200 && res.status <= 304) {
    return Promise.resolve(res.data)
  }
  return Promise.reject(res)
}, err => Promise.reject(err))

if (process.env.NODE_ENV === 'development') {
  window.ajax = axios
}

const store = (process.env.NODE_ENV === 'production' || (!window.__REDUX_DEVTOOLS_EXTENSION__())) ? (
  createStore(reducer, applyMiddleware(thunkMiddleware))
) : (
  createStore(reducer, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__()))
)

render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('app-root'),
)
