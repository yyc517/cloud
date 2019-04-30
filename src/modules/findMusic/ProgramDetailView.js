import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import { Link } from 'react-router-dom'
import { Button, Icon, message } from 'antd';
import { millisecond } from '@utils'
import Comment from './CommentView'

const Root = styled.div`
    width: 100%;
    height: 100%;
    .main{
        width: 982px;
        height: 100%;
        margin: auto;
        display: flex;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        .left{
            width: 710px;
            border-right: 1px solid #ddd;
            padding: 47px 30px 40px 39px;
            .header{
                display: flex;
                img{
                    width: 146px;
                    height: 146px;
                    border: 1px solid #ddd;
                    padding: 3px;
                }
                .message{
                    padding: 17px 0 0 25px;
                    .name{
                        display: flex;
                        .logo{
                            background-color: #da1e1e;
                            color: #fff;
                            padding: 4px 10px;
                            border-top-right-radius: 15px;
                            border-bottom-right-radius: 15px;
                            font-size: 12px;
                            border: 1px solid #e06965;
                            height: 28px;
                            white-space: nowrap;
                        }
                        .title{
                            margin: 0 0 0 10px;
                        }
                    }
                    .radioName{
                        margin-top: 25px;
                        .customer{
                            color: #999;
                            font-size: 20px;
                            margin-right: 8px;
                        }
                        .radio{
                            font-size: 17px;
                            color: #777;
                        }
                        .radio:hover{
                            text-decoration: underline;
                        }
                        button{
                            margin-left: 20px;
                            height: 30px;
                            padding: 0 8px;
                            font-size: 12px;
                            .anticon {
                                font-size: 16px;
                                vertical-align: sub;
                            }
                            span{
                                margin-left: 3px;
                                vertical-align: text-bottom;
                            }
                        }
                        button: hover{
                            color: #000000a6;
                            border-color: #d9d9d9;
                            background-color: #f1f1f1;
                        }
                    }
                }
            }
            .btns{
                margin: 20px 0 30px 0;
                .ibtn{
                    border: 1px solid #3984ce;
                    background: linear-gradient(#4493dc, #1e6fbf);
                    color: #fff;
                    padding: 0 10px;
                    font-size: 12px;
                    .icon{
                        color: #fff;
                        line-height: 33px;
                        height: 29px;
                        font-size: 16px;
                    }
                    span{
                        margin: 0px 0px 1px 5px;
                        vertical-align: text-bottom;
                    }
                }
                .btn{
                    background: linear-gradient(#fefefe, #f1f1f1);
                    border: 1px solid #b7b7b7;
                    color: #444;
                    padding: 0 7px;
                    margin-left: 10px;
                    font-size: 12px;
                    height: 31px;
                    .icon{
                        line-height: 33px;
                        height: 30px;
                        margin-right: 5px;
                        font-size: 15px;
                    }
                    span{
                        margin: 0 0 1px 0;
                        vertical-align: text-bottom;
                    }
                }
                .btn: hover{
                    color: #000;
                    border: 1px solid #ddd;
                }
            }
            .msg{
                .category{
                    color: #cc0000;
                    border: 1px solid #cc0000;
                    padding: 0 5px;
                }
                .name{
                    font-size: 14px;
                    font-weight: bold;
                    margin-left: 10px;
                }
                .create, .playCount{
                    color: #999;
                    margin-left: 20px;
                }
                .playCount > .count{
                    color: #cc0000;
                    font-weight: bold;
                }
                font-size: 12px;
            }
            .dec{
                font-size: 12px;
                color: #666;
                margin-top: 10px;
            }
        }
        .right{
            width: 270px;
            padding: 20px 40px 40px 30px;
            .programs{
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #ddd;
                padding-bottom: 4px; 
                a{
                    display: block;
                    font-size: 12px;
                    color: #666;
                }
                a: first-child{
                    font-weight: bold;
                }
                a: hover{
                    text-decoration: underline;
                }
            }
            .programList{
                margin-top: 20px;
                .item{
                    display: flex;
                    margin-bottom: 15px;
                    img{
                        width: 50px;
                        height: 50px;
                    }
                    .msg{
                        width: 140px;
                        margin-left: 10px;
                        a{
                            display: block;
                            color: #333;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        a: hover{
                            text-decoration: underline;
                        }
                        p{
                            margin: 5px 0 0 0;
                            font-size: 12px;
                            color: #999;
                        }
                    }
                }
            }
            .download{
                margin-top: 40px;
                h3{
                    text-align: left;
                    font-size: 12px;
                    font-weight: bold;
                    border-bottom: 1px solid #ddd;
                    height: 25px;
                    margin-bottom: 0;
                }
                .type{
                    width: 200px;
                    height: 70px;
                    margin: 5px 0 15px 0;
                    background: url(../../../public/img/sprite.png) no-repeat 0 -380px;
                }
            }
        }
    }
`
@connect('findMusic')
export default class ProgramDetailView extends React.Component{
    componentWillMount(){
        this.getSearch(this.props.location.search)
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            this.getSearch(nextProps.location.search)
        }
    }
    getSearch(search){
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const rid = searchParams.get('rid')
        const id = searchParams.get('id')
        this.props.selectDjProgramByIdFun(rid, data=>{
            data.map(d=>d.id == id ? this.props.addProgramDetailFun(d) : '')
        })
        this.props.selectCommentByIdFun(id, 'dj')
    }
    //电台节目播放
    onProgramPlay = p =>{
        if(p.programFeeType === '1'){
            message.warn('暂无版权')
            return
        }
        this.props.selectSongUrlByIdFun(p.mainTrackId, p.name, {name: p.radio.name, id: p.radio.id})
    }
    render(){
        const { djPrograms, programDetail } = this.props
        const rid = new URLSearchParams(this.props.location.search.substring(1)).get('rid')
        return(
            <Root>
                {
                    JSON.stringify(programDetail) !== '{}' ?
                    (<div className="main">
                        <div className="left">
                            <div className="header">
                                <img src={programDetail.coverUrl} />
                                <div className="message">
                                    <div className="name">
                                        <div className="logo">电台节目</div>
                                        <div className="title">
                                            <h3 style={{ fontSize: 20, marginBottom: 0 }}>{programDetail.name}</h3>
                                        </div>
                                    </div>
                                    <div className="radioName">
                                        <Icon className="customer" type="customer-service" />
                                        <Link to={`/radio?id=${programDetail.radio.id}`} className="radio">{programDetail.radio.name}</Link>
                                        <Button><Icon type="star" />{`订阅(${millisecond.transformCount(programDetail.radio.subCount)})`}</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="btns">
                                <Button onClick={this.onProgramPlay.bind(this, programDetail)} className="ibtn"><Icon type="play-circle" className="icon" /><span>播放 {millisecond.secToMinute(programDetail.duration)}</span></Button>
                                <Button className="btn"><Icon type="like" className="icon" /><span>{`(${programDetail.likedCount})`}</span></Button>
                                <Button className="btn"><Icon type="message" className="icon" /><span>{`(${programDetail.commentCount})`}</span></Button>
                                <Button className="btn"><Icon type="share-alt" className="icon" /><span>{`(${programDetail.shareCount})`}</span></Button>
                                <Button className="btn"><Icon type="download" className="icon" /><span>下载</span></Button>
                            </div>
                            <div className="msg">
                                <Link to={`/djradio?id=${programDetail.radio.categoryId}`} className="category">{programDetail.radio.category}</Link>
                                <span className="name">{`${programDetail.radio.name} 第${programDetail.radio.programCount}期`}</span>
                                <span className="create">{`${millisecond.transformFullDate(programDetail.createTime)} 创建`}</span>
                                <span className="playCount">播放：<span className="count">{programDetail.listenerCount}</span>次</span>
                            </div>
                            <div className="dec">介绍：{programDetail.description}</div>
                            <Comment {...this.props} />
                        </div>
                        <div className="right">
                            <div className="programs">
                                <Link to={`/radio?id=${rid}`}>更多节目</Link>
                                <Link to={`/radio?id=${rid}`}>全部></Link>
                            </div>
                            <div className="programList">
                                {
                                    djPrograms.filter(d=>d.id !== programDetail.id).slice(0,5).map((p, i)=>(
                                        <div className="item" key={i}>
                                            <Link to={`/program?rid=${rid}&id=${p.id}`}><img src={p.coverUrl} /></Link>
                                            <div className="msg">
                                                <Link to={`/program?rid=${rid}&id=${p.id}`}>{p.name}</Link>
                                                <p>{`Vol.${p.serialNum}`}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="download">
                                <h3>网易云音乐多端下载</h3>
                                <div className="type"></div>
                                <p style={{ fontSize: 12, color: '#999', textAlign: 'left' }}>同步歌单，随时畅想320K好音乐</p>
                            </div>
                        </div>
                    </div>) : ''
                }
            </Root>
        )
    }
}
