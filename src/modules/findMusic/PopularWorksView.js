import React from 'react'
import styled from 'styled-components'
import { Tooltip, Button, Icon } from 'antd'
import { millisecond } from '@utils'
import { Link } from 'react-router-dom'
import connect from '@connect'

const Root = styled.div`
    width: 100%;
    .btns{
        text-align: left;
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
                font-size: 14px;
            }
        }
        .add{
            margin: 0 8px 0 -2px;
            border-left: 1px solid #3170b5;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            padding: 0 8px;
        }
        .btn{
            background: -webkit-linear-gradient(#fefefe, #f1f1f1);
            border: 1px solid #b7b7b7;
            color: #000;
            padding: 0 7px;
            margin-right: 8px;
            font-size: 12px;
            .icon{
                line-height: 33px;
                height: 30px;
                font-size: 17px;
                color: #666;
            }
        }
        .btn: hover{
            color: #000;
            border: 1px solid #ddd;
        }
    }
    .list{
        list-style: none;
        padding: 0;
        margin-top: 10px;
        .song{
            display: flex;
            .index, .title, .time, .name{
                text-align: left;
                font-size: 12px;
                padding: 6px 10px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #333;
                p{
                    margin-bottom: 0;
                }
            }
            .index{
                width: 94px;
                display: flex;
                justify-content: space-between;
                .play{
                    color: #b3b3b3;
                    font-size: 17px;
                    vertical-align: bottom;
                    cursor: pointer;
                }
                .play: hover{
                    color: #888;
                }
            }
            .title{
                width: 329px;
                a{
                    color: #000;
                }
                a: hover{
                    text-decoration: underline;
                }
                .video{
                    color: rgb(194, 12, 12);
                    margin-left: 5px;
                    cursor: pointer;
                    vertical-align: text-bottom;
                }
            }
            .time{
                width: 89px;
                .showIcon{
                    margin-right: 6px;
                    font-size: 15px;
                    cursor: pointer;
                    color: #777;
                }
                .showIcon: hover{
                    color: #000;
                }
            }
            .name{
                width: 128px;
                color: #000;
            }
            .name: hover{
                text-decoration: underline;
            }
        }
        .song: nth-child(even){
            background-color: #fff;
        }
        .song: nth-child(odd){
            background-color: #f7f7f7;
        }
    }
`
@connect('findMusic')
export default class PopularWorksView extends React.Component{
    state={
        hoverIndex: ''
    }
    mouseEnter = (index) =>{
        this.setState({ hoverIndex: index })
    }
    mouseLeave = () =>{
        this.setState({ hoverIndex: '' })
    }
    render(){
        const { artistDetail } = this.props
        return(
            <Root>
                {
                    JSON.stringify(artistDetail) !== '{}' ?
                    (<React.Fragment>
                        <div className="btns">
                            <Button className="ibtn"><Icon type="play-circle" className="icon" /><span style={{ marginLeft: '5px', verticalAlign: 'text-bottom' }}>播放</span></Button>
                            <Tooltip placement="bottomLeft" title="添加到播放列表" arrowPointAtCenter={true}>
                                <Button className="ibtn add"><Icon type="plus" className="icon" /></Button>
                            </Tooltip>
                            <Button className="btn"><Icon type="folder-add" className="icon" /><span style={{ marginLeft: '3px', verticalAlign: 'text-bottom' }}>收藏热门50</span></Button>
                        </div>
                        <ul className="list">
                            {
                                artistDetail.hotSongs.map((s, i)=>(
                                    <li className="song" key={i} onMouseEnter={this.mouseEnter.bind(this, i)} onMouseLeave={this.mouseLeave.bind(this)}>
                                        <div className="index"><p>{i+1}</p><Icon type="play-circle" theme="filled" className="play" /></div>
                                        <div className="title"><Link to={`/song?id=${s.id}`}>{s.name}</Link>{s.tns ? <span style={{ color: '#999' }}>{' - ('+ s.tns[0] +')'}</span> : s.alia.length > 0 ? <span style={{ color: '#999' }}>{' - ('+ s.alia[0] +')'}</span> : ''}{s.mv === 0 ? '' : <Tooltip placement="bottom" title="播放mv"><Link to={`/mv?id=${s.mv}`}><Icon type="video-camera" className="video" /></Link></Tooltip>  }</div>
                                        <div className="time">
                                            { this.state.hoverIndex === i ? 
                                                (<React.Fragment>
                                                    <Tooltip placement="bottomLeft" title="添加到播放列表" arrowPointAtCenter={true}>
                                                        <Icon type="plus" className="showIcon" />
                                                    </Tooltip>
                                                    <Tooltip placement="bottomLeft" title="收藏" arrowPointAtCenter={true}>
                                                        <Icon type="folder-add" className="showIcon" />
                                                    </Tooltip>
                                                    <Tooltip placement="bottomLeft" title="分享" arrowPointAtCenter={true}>
                                                        <Icon type="share-alt" className="showIcon" />
                                                    </Tooltip>
                                                    <Tooltip placement="bottomLeft" title="下载" arrowPointAtCenter={true}>
                                                        <Icon type="download" className="showIcon" />
                                                    </Tooltip>
                                                </React.Fragment>) 
                                                :millisecond.secTotime(s.dt)}
                                        </div>
                                        <Link to={`/album?id=${s.al.id}`} className="name">{s.al.name}</Link>   
                                    </li>
                                ))
                            }
                        </ul>
                    </React.Fragment>) : ''
                }
            </Root>
        )
    }
}