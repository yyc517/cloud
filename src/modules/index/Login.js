import React from 'react'
import connect from '@connect'
import Styled from 'styled-components'
import { Form, Checkbox, Input, Button, Cascader } from 'antd'
import {StorageKey} from '@res/R'

const FormItem = Form.Item
const Root = Styled.div`
    width:100%;
    height:978px;
    display:flex;
    flex-direction:column;
    background:url(../../../public/img/background.jpg) no-repeat;
    background-size: 100% 100%;
    .ant-input{
        background-color:rgba(255,255,255,.0);
        border:1px solid #003b85;
        color:black;
        outline:none;
        &[disabled]{
            background-color:rgba(255,255,255,.5);
            color:#333;
        }
    }
    .ant-input:focus,.ant-input:hover{
        border:1px solid #003b85;
    }

    .login-form-button {
        width: 100%;
        background:#003b85 !important;
        color:white !important;
        border:0 !important;
    }

    .login-form-button:hover{
        background:#123a5f !important;
    }
    .Content{
        width:100%;
        height: 400px;
        .login-form{
            background: #eeeeeeb0;
            width: 430px;
            margin: 200px auto;
            padding: 30px 50px 0 0;
            height: 90%;
            border-radius: 10px;
            border: 2px solid #fff;
        }
    }
    .ant-cascader-picker-arrow{
        color:white;
        background:#003b85;
        position: absolute;
        z-index: 1;
        top: 7px;
        right: 1px;
        width: 12%;
        height: 30px;
        font-size: 12px;
        margin-top: -6px;
        line-height: 30px;
    }
    .ant-checkbox{
        border:1px solid  #003b85
    }
    .ant-form-item-label label ,.colorClass{
        color:#003b85;
    }
    .ant-form-item{
        margin-bottom:15px
    }
`

@connect('user')
class LoginForm extends React.Component {
    state={
        validateStatus: ''
    }

    //更新组件图片状态
    onUserIdVerified = res=> {
        this.setState({ validateStatus: res ? 'success' : 'error' })
    }

    //登陆，为了使用await功能，但好像不起作用。
    onLogin=()=>{
        var that = this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                that.props.loginFun(values);
            }
        })
    }

    //登陆操作
    signIn = async(e) => {
        e.preventDefault();
        await this.onLogin();
    }

    render() {
        let userId = localStorage.getItem(StorageKey.USER_ID)||"";
        let rememberMe = !localStorage.getItem(StorageKey.REMEMBER)||(localStorage.getItem(StorageKey.REMEMBER)  === "true")?true:false;
        let pwd = "";
        if(rememberMe){
            //初始化密码框
            pwd = localStorage.getItem(StorageKey.PWD)||"";
        }

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 18 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 18,
                    offset: 6,
                },
            },
        };
        const CheckoutLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 18,
                    offset: 17,
                },
            },
        };

        return (
            <Root>
                <div className="Content">
                <Form onSubmit={this.signIn} className='login-form'>
                    <h2 style={{ margin: '10px 0px 10px 175px ' }} className='colorClass'>用户登录</h2>
                    <FormItem hasFeedback validateStatus={ this.state.validateStatus } {...formItemLayout} label="账户"  >
                        {getFieldDecorator('userId', {
                            initialValue: userId,
                            validateFirst:true,
                            rules: [{ required: false, message: '请输入用户名!' }],
                        })(
                            <Input ref={ userInput => (this.userInput = userInput) } />
                        )}
                    </FormItem>
                    <FormItem label="密码" {...formItemLayout}>
                        {getFieldDecorator('password', {
                            initialValue: pwd,
                            rules: [{ required: false, message: '请输入用户密码!' }],
                        })(
                            <Input type='password' />
                        )}
                    </FormItem>
                    
                    <FormItem {...CheckoutLayout} >
                        {getFieldDecorator('rememberMe', {
                            valuePropName: 'checked',
                            initialValue: rememberMe
                        })(
                            <Checkbox  className='colorClass'>记住密码</Checkbox>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type='primary' ghost htmlType='submit' className='login-form-button' >
                            登录
                        </Button>
                    </FormItem>
                </Form>
                </div>
            </Root>
        )
    }
}
const WrappedLoginForm = Form.create()(LoginForm)
export default WrappedLoginForm
