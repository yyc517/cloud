import React from 'react'
import styled from 'styled-components'
import { millisecond } from '@utils'
import { Button, Tooltip, Icon, Tag, Input   } from 'antd';

const { TextArea } = Input;
const Root = styled.div`
    width: 100%;
    margin-top: 35px;
    .comment{
        .header{
            display: flex;
            border-bottom: 2px solid #c20c0c;
            height: 35px;
            h3{
                font-size: 20px;
                margin-bottom: 0;
            }
            p{
                margin: 0 0 0 20px;
                line-height: 35px;
                color: #999;
            }
        }
        .write{
            display: flex;
            margin-top: 20px;
            .commentBtn{
                background: linear-gradient(#4493dc,#1e6fbf);
                color: #fff;
                padding: 0 9px;
                font-size: 12px;
                height: 25px;
                border: 1px solid #1e6fbf;
                margin-left: 15px;
            }
        }
        .hot, .new{
            margin-top: 15px;
            h3{
                font-size: 12px;
                font-weight: bold;
                text-align: left;
                border-bottom: 1px solid #ddd;
                height: 23px;
                margin-bottom: 0;
            }
            .content{
                .item{
                    display: flex;
                    padding: 15px 0;
                    border-bottom: 1px dotted #ddd;
                    .dec{
                        margin: 0 0 0 10px;
                        width: 100%;
                        p{
                            display: table;
                            height: 20px;
                            line-height: 20px;
                            margin: 0;
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                        .replied{
                            font-size: 12px;
                            text-align: left;
                            background: #f4f4f4;
                            border: 1px solid #dedede;
                            padding: 8px 19px;
                            margin-top: 10px;
                            position: relative;
                            a: hover{
                                text-decoration: underline;
                            }
                            .arrow{
                                position: absolute;
                                width: 5px;
                                height: 5px;
                                border-top: 1px solid #dedede;
                                border-left: 1px solid #dedede;
                                transform: rotate(45deg);
                                top: -4px;
                                background: #f4f4f4;
                            }
                        }
                        .date{
                            display: flex;
                            margin-top: 16px;
                            justify-content: space-between;
                            p{
                                color: #999;
                            }
                            .like{
                                font-size: 12px;
                                .anticon-like{
                                    font-size: 15px;
                                    vertical-align: text-top;
                                    color: #1175bb;
                                    cursor: pointer;
                                }
                                .anticon-like: hover{
                                    color: #0f4e79;
                                }
                                a{
                                    color: #666;
                                    vertical-align: text-top;
                                }
                                a: hover{
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
export default class CommentView extends React.Component{
    render(){
        const { comment } = this.props
        return(
            <Root id="comment">
                <div className="comment">
                    <div className="header">
                        <h3>评论</h3>
                        <p>{`共${comment.total}条评论`}</p>
                    </div>
                    <div className="write">
                        <img src="../../../public/img/avatar.jpg" style={{ height: 50 }} />
                        <div>
                            <TextArea rows={3} style={{ resize: 'none', width: 571, marginLeft: 15 }} />
                            <div style={{ textAlign: 'right', marginTop: 10, color: '#999' }}>140<Button className="commentBtn">评论</Button></div>
                        </div>
                    </div>
                    {comment.hotComments && comment.hotComments.length > 0 && 
                        (<div className="hot">
                            <h3>精彩评论</h3>
                            <div className="content">
                                {
                                    comment.hotComments.map((h, i)=>(
                                        <div key={i} className="item" style={ comment.hotComments.length === i + 1 ? { borderBottom: 'none' } : {} }>
                                            <img src={h.user.avatarUrl} style={{ height: 50 }} />
                                            <div className="dec">
                                                {
                                                    h.content.split('\n').map((c, i)=>(
                                                        c && <p key={i}>{i==0 ? <React.Fragment><a>{h.user.nickname}</a><span>{'：' + c}</span></React.Fragment> : c}</p>
                                                    ))
                                                }
                                                {
                                                    h.beReplied.length > 0 ? (
                                                        <div className='replied'>
                                                            <div className="arrow"></div>
                                                            <a>{h.beReplied[0].user.nickname}</a>
                                                            {'：' + h.beReplied[0].content}
                                                        </div>
                                                    ) : ''
                                                }
                                                <div className="date">
                                                    <p>{millisecond.commentTime(h.time)}</p>
                                                    <div className="like">
                                                        <Icon type="like" />
                                                        {' (' + h.likedCount + ')'}
                                                        <span> | </span>
                                                        <a>回复</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>)
                    }
                    {
                        comment.comments && comment.comments.length > 0  && 
                        (<div className="new">
                            <h3>最新评论</h3>
                            <div className="content">
                                {
                                    comment.comments.map((e, i)=>(
                                        <div key={i} className="item">
                                            <img src={e.user.avatarUrl} style={{ height: 50 }} />
                                            <div className="dec">
                                                {
                                                    e.content.split('\n').map((c, i)=>(
                                                        c && <p key={i}>{i==0 ? <React.Fragment><a>{e.user.nickname}</a><span>{'：' + c}</span></React.Fragment> : c}</p>
                                                    ))
                                                }
                                                {
                                                    e.beReplied.length > 0 ? (
                                                        <div className='replied'>
                                                            <div className="arrow"></div>
                                                            <a>{e.beReplied[0].user.nickname}</a>
                                                            {'：' + e.beReplied[0].content}
                                                        </div>
                                                    ) : ''
                                                }
                                                <div className="date">
                                                    <p>{millisecond.commentTime(e.time)}</p>
                                                    <div className="like">
                                                        <Icon type="like" />
                                                        {' (' + e.likedCount + ')'}
                                                        <span> | </span>
                                                        <a>回复</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>)
                    }
                </div>
            </Root>
        )
    }
}