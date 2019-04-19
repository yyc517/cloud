import ActionType from './Type'
import axios from 'axios'
import { message } from 'antd'
import {StorageKey} from '@res/R'

export default {
    loginFun: (user)=> async(dispatch) =>{
        axios.get(`/login/cellphone?phone=${user.userId}&password=${user.password}`,{
            headers:{'authorization':''}
        })
        .then(data=>{
            if(data.code == 200){
                // window.location.reload();
                const userData={
                    ...data,
                    loginStatus:true,
                }
                //是否记住密码
                localStorage.setItem(StorageKey.REMEMBER, user.rememberMe);
                //保存密码
                if(user.rememberMe){
                    localStorage.setItem(StorageKey.PASSWORD, user.password);
                }else{
                    localStorage.removeItem(StorageKey.PASSWORD);
                }
                localStorage.setItem(StorageKey.USER_ID,user.userId)
                dispatch({ type: ActionType.LOGIN_IN, userData })
            }
        })
        .catch(data=>{
            message.error(data.response.data.msg)
        })
    },
    logoutFun: ()=> dispatch =>{
        axios(`/logout`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.LOGIN_OUT })
            }
        })
    }
}