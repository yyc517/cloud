import React from 'react'
import styled from 'styled-components'
import { millisecond } from '@utils'
import { Button, Tooltip, Icon, Radio  } from 'antd';
import { Link } from 'react-router-dom'
import connect from '@connect'

const Root = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .main{
        width: 982px;
        display: flex;
        margin: auto;
        background-color: #fff;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        .left{
            width: 710px;
            padding: 47px 30px 40px 40px;
            border-right: 1px solid #ddd;
            .nav{
                display: flex;
                .message{
                    margin-left: 30px;
                    text-align: left;
                    .name{
                        display: flex;
                        .logo{
                            background-color: #da1e1e;
                            color: #fff;
                            padding: 4px 15px;
                            border-top-right-radius: 15px;
                            border-bottom-right-radius: 15px;
                            font-size: 12px;
                            border: 1px solid #e06965;
                            height: 28px;
                            width: 60px;
                        }
                        .title{
                            margin: 0 0 0 10px;
                        }
                    }
                    .dj{
                        margin-top: 10px;
                        font-size: 12px;
                        a: hover{
                            text-decoration: underline;
                        }
                    }
                    .btns{
                        margin: 20px 0 20px 0;
                        .ibtn{
                            border: 1px solid #3984ce;
                            background: linear-gradient(#4493dc, #1e6fbf);
                            color: #fff;
                            padding: 0 10px;
                            font-size: 12px;
                            height: 31px;
                            margin-right: 5px;
                            .icon{
                                color: #fff;
                                line-height: 33px;
                                height: 29px;
                                font-size: 14px;
                            }
                        }
                        .btn{
                            background: linear-gradient(#fefefe, #f1f1f1);
                            border: 1px solid #b7b7b7;
                            color: #000;
                            padding: 0 7px;
                            margin-right: 5px;
                            font-size: 12px;
                            height: 31px;
                            .icon{
                                line-height: 33px;
                                height: 30px;
                                margin-right: 3px;
                                font-size: 15px;
                            }
                        }
                        .btn: hover{
                            color: #000;
                            border: 1px solid #ddd;
                        }
                    }
                }
            }
            .dec{
                text-align: left;
                margin-top: 25px;
                font-size: 12px;
                .category{
                    color: #cc0000;
                    border: 1px solid #cc0000;
                    padding: 0px 4px;
                    margin-right: 10px;
                }
            }
            .programs{
                margin-top: 27px;
                .header{
                    display: flex;
                    border-bottom: 2px solid #c20c0c;
                    height: 36px;
                    h3{
                        font-size: 20px;
                        margin-bottom: 0;
                    }
                    p{
                        line-height: 38px;
                        margin: 0 0 0 20px;
                        font-size: 12px;
                    }
                    .ant-radio-group{
                        .ant-radio-button-wrapper{
                            height: 25px;
                            line-height: 22px;
                            padding: 0 8px;
                            background-color: #fdfdfd;
                            border: 1px solid #949494;
                            color: #999;
                        }
                        .ant-radio-button-wrapper: first-child{
                            border-right: none;
                        }
                        .ant-radio-button-wrapper-checked{
                            background-color: #a0a0a0;
                            box-shadow: none;
                            color: #fff;
                        }
                    }
                }
                .list{
                    list-style: none;
                    padding: 0;
                    border: 1px solid #ddd;
                    .program{
                        display: flex;
                        .item{
                            text-align: left;
                            font-size: 12px;
                            padding: 18px 10px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            color: #666;
                            p{
                                margin-bottom: 0;
                            }
                        }
                        .item: nth-child(1){
                            width: 83px;
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
                        .item: nth-child(2){
                            width: 190px;
                            padding: 18px 0;
                            a{
                                color: #666;
                            }
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                        .item: nth-child(3){
                            width: 60px;
                            padding: 18px 0;
                            .showIcon{
                                margin-right: 6px;
                                font-size: 16px;
                                cursor: pointer;
                                color: #777;
                            }
                            .showIcon: hover{
                                color: #000;
                            }
                        }
                        .item: nth-child(4){
                            width: 80px;
                        }
                        .item: nth-child(5){
                            width: 80px;
                        }
                        .item: nth-child(6){
                            width: 86px;
                            color: #999;
                        }
                        .item: nth-child(7){
                            width: 60px;
                            color: #999;
                        }
                    }
                    .program: nth-child(even){
                        background-color: #f7f7f7;
                    }
                }
            }
        }
        .right{
            width: 270px;
            padding: 20px 40px 40px 30px; 
            .liker, .similar, .download{
                margin-bottom: 30px;
                h3{
                    text-align: left;
                    font-size: 12px;
                    font-weight: bold;
                    border-bottom: 1px solid #ddd;
                    height: 25px;
                    margin-bottom: 0;
                }
                .users{
                    display: flex;
                    flex-wrap: wrap;
                    margin: 20px 0 0 -13px;
                    .image{
                        height: 40px;
                        cursor: pointer;
                        margin: 0 0 10px 13px;
                    }
                }
                .list{
                    margin-top: 20px;
                    .item{
                        display: flex;
                        margin-bottom: 15px;
                        .msg{
                            margin-left: 10px;
                            width: 140px;
                            p{
                                margin-bottom: 5px;
                                text-align: left;
                            }
                            p: first-child{
                                font-size: 14px;
                                cursor: pointer;
                                color: #333;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                            }
                            p: first-child: hover{
                                text-decoration: underline;
                            }
                            p: last-child{
                                font-size: 12px;
                                color: #666;
                            }
                            .nickname{
                                cursor: pointer;
                                margin : 0 5px;
                            }
                            .nickname: hover{
                                text-decoration: underline;
                            }
                        }
                    }
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
export default class SongListDetailView extends React.Component{
    state={
        isVisible: false,
        hoverIndex: '',
        sort: 'true',
        djPrograms: this.props.djPrograms,
    }
    componentWillMount(){
        const {search} = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectRadioByIdFun(id)
    }
    onToggle = (height) =>{
        if(this.state.isVisible){
            this.text.style.maxHeight = height
        }else{
            this.text.style.maxHeight = '100%'
        }
        this.setState({ isVisible: !this.state.isVisible })
    }
    mouseEnter = (index) =>{
        this.setState({ hoverIndex: index })
    }
    mouseLeave = () =>{
        this.setState({ hoverIndex: '' })
    }
    onTagClick = name =>{
        this.props.selectPlaylistFun(name)
    }
    onSortClick = e =>{
        this.setState({ sort: e.target.value })
        this.props.sortDjProgramsFun(e.target.value)
    }
    render(){
        const { radioDetail, djPrograms } = this.props
        const rid = new URLSearchParams(this.props.location.search.substring(1)).get('id')
        return(
            <Root>
                {
                    JSON.stringify(radioDetail) !== '{}' ? 
                    (<div className="main">
                        <div className="left">
                            <div className="nav">
                                <div style={{ width: 208, height: 208, padding: 2, border: '1px solid #ddd' }}>
                                    <img src={radioDetail.picUrl} style={{ height: 202 }} />
                                </div>
                                <div className="message">
                                    <div className="name">
                                        <div className="logo">电台</div>
                                        <div className="title">
                                            <h3 style={{ fontSize: 20, marginBottom: 0 }}>{radioDetail.name}</h3>
                                        </div>
                                    </div>
                                    <div className="dj">
                                        <img src={radioDetail.dj.avatarUrl} style={{ height: 35, width: 35, marginRight: 10 }} />
                                        <a>{radioDetail.dj.nickname}</a>
                                    </div>
                                    <div className="btns">
                                        <Button className="ibtn"><Icon type="star" className="icon" /><span style={{ marginLeft: '5px', verticalAlign: 'text-bottom' }}>订阅{` (${radioDetail.subCount})`}</span></Button>
                                        <Button className="btn"><Icon type="play-circle" className="icon" /><span style={{ marginLeft: 0, verticalAlign: 'text-bottom' }}>全部播放</span></Button>
                                        <Button className="btn"><Icon type="share-alt" className="icon" /><span style={{ marginLeft: 0, verticalAlign: 'text-bottom' }}>分享{` (${radioDetail.shareCount})`}</span></Button>
                                    </div>
                                    <div className="dec">
                                        <span className="category">{radioDetail.category}</span>
                                        <span>{radioDetail.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="programs">
                                <div className="header" style={{ justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex' }}>
                                        <h3>节目列表</h3>
                                        <p>共{radioDetail.programCount}期</p>
                                    </div>
                                    <Radio.Group value={this.state.sort} onChange={this.onSortClick}>
                                        <Radio.Button value='true'><Icon type="sort-ascending" /></Radio.Button>
                                        <Radio.Button value='false'><Icon type="sort-descending" /></Radio.Button>
                                    </Radio.Group>
                                </div>
                                <ul className="list">
                                    {
                                        djPrograms.map((p, i)=>(
                                            <li key={i} className="program"  onMouseEnter={this.mouseEnter.bind(this, i)} onMouseLeave={this.mouseLeave.bind(this)} style={this.state.hoverIndex === i ? {backgroundColor: '#ddddddb3'} : {}}>
                                                <div className="item"><p>{i+1}</p><Icon type="play-circle" theme="filled" className="play" /></div>
                                                <div className="item"><Link to={`/program?rid=${rid}&id=${p.id}`}>{p.name}</Link></div>
                                                <div className="item">
                                                    { this.state.hoverIndex === i ? 
                                                        (<React.Fragment>
                                                            <Tooltip placement="bottomLeft" title="添加到播放列表" arrowPointAtCenter={true}>
                                                                <Icon type="plus" className="showIcon" />
                                                            </Tooltip>
                                                            <Tooltip placement="bottomLeft" title="分享" arrowPointAtCenter={true}>
                                                                <Icon type="share-alt" className="showIcon" />
                                                            </Tooltip>
                                                            <Tooltip placement="bottomLeft" title="下载" arrowPointAtCenter={true}>
                                                                <Icon type="download" className="showIcon" />
                                                            </Tooltip>
                                                        </React.Fragment>) 
                                                        :''}
                                                </div>
                                                <div className="item">播放{millisecond.transformCount(p.listenerCount)}</div>
                                                <div className="item">赞{millisecond.transformCount(p.likedCount)}</div>
                                                <div className="item">{millisecond.transformFullDate(p.createTime)}</div>
                                                <div className="item">{millisecond.secTotime(p.duration)}</div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="right">
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