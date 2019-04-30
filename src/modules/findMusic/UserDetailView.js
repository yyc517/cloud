import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import { Icon, Button } from 'antd'
import { AreaCode } from '@utils'
import { Link } from 'react-router-dom'
const Root = styled.div`
    width: 100%;
    .main{
        width: 982px;
        margin: auto;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        padding: 40px;
        .header{
            display: flex;
            width: 100%;
            img{
                width: 188px;
                height: 188px;
                padding: 3px;
                border: 1px solid #ddd;
            }
            .msg{
                width: 100%;
                margin-left: 40px;
                .name{
                    display: flex;
                    justify-content: space-between;
                    .nickname{
                        font-size: 22px;
                    }
                    .level{
                        margin: 8px 6px 0 10px;
                        font-size: 15px;
                        height: 20px;
                        line-height: 18px;
                        border: 1px solid #e03a24;
                        padding: 0 10px;
                        font-family: -webkit-pictograph;
                        color: #e03a24;
                        border-radius: 10px;
                        font-weight: bold;
                    }
                    .gender{
                        font-size: 25px;
                        height: 30px;
                        line-height: 40px;
                    }
                    .btn{
                        font-size: 12px;
                        background: -webkit-linear-gradient(#fefefe, #f1f1f1);
                        border: 1px solid #b7b7b7;
                        color: #666;
                        padding: 0 10px;
                        line-height: 31px;
                        margin-left: 15px;
                        .anticon{
                            font-size: 14px;
                        }
                        span{
                            margin-left: 5px;
                        }
                    }
                    .letters: hover{
                        border: 1px solid #ddd;
                    }
                    .attention{
                        width: 75px;
                        border: 1px solid #3984ce;
                        background: -webkit-linear-gradient(#4493dc, #1e6fbf);
                        color: #fff;
                    }
                    .return{
                        padding: 0 16px;
                        color: #333;
                        height: 30px;
                        line-height: 28px;
                        border-radius: 5px;
                    }
                }
                .authType{
                    display: flex;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 10px;
                    .type{
                        background-color: #f24c34;
                        color: #fff;
                        padding: 0 16px;
                        border-radius: 12px;
                    }
                    .desc{
                        font-size: 15px;
                        color: #666;
                        margin-left: 7px
                    }
                }
                .dynamic{
                    display: flex;
                    margin-top: 8px;
                    .event{
                        padding: 0 40px 0 25px;
                        .count{
                            font-size: 22px;
                            font-family: none;
                            color: #666;
                            display: block;
                        }
                        .kind{
                            font-size: 12px;
                            color: #666;
                        }
                        // .count: hover, .count: hover + .kind{
                        //     color: red;
                        // }
                        .kind: hover, .kind: hover + .count{
                            color: red;
                        }
                    }
                    .event: first-child{
                        padding-left: 0;
                    }
                    .event: nth-child(2){
                        border-left: 1px solid #ddd;
                        border-right: 1px solid #ddd;
                    }
                }
            }
        }
    }
`
@connect('findMusic')
export default class UserDetailView extends React.Component{
    componentWillMount(){
        const { search } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.getUserDetailFun(id)
    }
    render(){
        const { userDetail } =  this.props
        return(
            <Root>
                {console.log(userDetail)}
                {
                    JSON.stringify(userDetail) !== '{}' ?
                    (<div className="main">
                        <div className="header">
                            <img src={userDetail.profile.avatarUrl} />
                            <div className="msg">
                                <div className="name">
                                    <div style={{ display: 'flex' }}>
                                        <h2 className="nickname">{userDetail.profile.nickname}</h2>
                                        <p className="level">Lv{userDetail.level}</p>
                                        <Icon type={userDetail.profile.gender == 1 ? "man" : "woman"} className="gender" style={{ color: userDetail.profile.gender == 1 ? '#26a6e4' : '#ffb5d3' }} />
                                        <Button className="letters btn"><Icon type="mail" />发私信</Button>
                                        <Button className="attention btn"><Icon type="plus" />关注</Button>
                                    </div>
                                    <Link to={`/artist?id=${userDetail.profile.artistId}`} className="return btn">查看歌手页</Link>
                                </div>
                                <div className="authType">
                                    <div className="type">{userDetail.profile.mainAuthType.type === '2' ? '音乐人' : '认证' }</div>
                                    <div className="desc">{userDetail.profile.mainAuthType.desc}</div>
                                </div>
                                <div className="dynamic">
                                    <div className="event">
                                        <Link to={`/user/event?id=${userDetail.profile.userId}`} className="count">{userDetail.profile.eventCount}</Link>
                                        <Link to={`/user/event?id=${userDetail.profile.userId}`} className="kind">动态</Link>
                                    </div>
                                    <div className="event">
                                        <Link to={`/user/follows?id=${userDetail.profile.userId}`} className="count">{userDetail.profile.follows}</Link>
                                        <Link to={`/user/follows?id=${userDetail.profile.userId}`} className="kind">关注</Link>
                                    </div>
                                    <div className="event">
                                        <Link to={`/user/fans?id=${userDetail.profile.userId}`} className="count">{userDetail.profile.followeds}</Link>
                                        <Link to={`/user/fans?id=${userDetail.profile.userId}`} className="kind">粉丝</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : ''
                }
            </Root>
        )
    }
}