import React from 'react'
import styled from 'styled-components'
import { millisecond } from '@utils'
import CommentView from './CommentView'
import { Button, Tooltip, Icon, Tag } from 'antd';
import { Link } from 'react-router-dom'
import connect from '@connect'

const Root = styled.div`
    width: 100%;
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
                    .creator{
                        display: flex;
                        margin-top: 10px;
                        p{
                            line-height: 32px;
                            height: 35px;
                            font-size: 12px;
                        }
                        .nickname{
                            margin: 0 0 0 10px;
                            color: #0c73c2;
                            cursor: pointer;
                        }
                        .nickname: hover{
                            text-decoration: underline;
                        }
                        p: last-child{
                            margin: 0 0 0 20px;
                            color: #999;
                        }
                    }
                    .item{
                        margin-top: 5px;
                        font-size: 12px;
                        a: hover{
                            text-decoration: underline;
                        }
                        .ant-tag{
                            border-radius: 12px;
                            padding: 0 12px;
                        }
                    }
                    .btns{
                        margin: 20px 0 25px 0;
                        .ibtn{
                            border: 1px solid #3984ce;
                            background: linear-gradient(#4493dc, #1e6fbf);
                            color: #fff;
                            padding: 0 10px;
                            font-size: 12px;
                            height: 31px;
                            .icon{
                                color: #fff;
                                line-height: 33px;
                                height: 29px;
                                font-size: 14px;
                            }
                        }
                        .add{
                            margin: 0 5px 0 -2px;
                            border-left: 1px solid #3170b5;
                            border-top-left-radius: 0;
                            border-bottom-left-radius: 0;
                            padding: 0 8px;
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
                margin-top: 20px;
                h3{
                    font-size: 12px;
                    font-weight: bold;
                }
                p{
                    font-size: 12px;
                    line-height: 24px;
                    margin: 4px 0 0 0;
                }
                .toggle{
                    text-align: right;
                    font-size: 12px;
                    margin-top: 10px;
                    a{
                        color: #0c73c2;
                    }
                    a: hover{
                        text-decoration: underline;
                    }
                }
            }
            .songs{
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
                }
                .list{
                    list-style: none;
                    padding: 0;
                    border: 1px solid #ddd;
                    .hitem{
                        display: flex;
                        border-top: none;
                        .htitle{
                            padding: 8px 10px;
                            border-right: 1px solid #ddd;
                            border-bottom: 1px solid #ddd;
                            text-align: left;
                            font-size: 12px;
                            background: linear-gradient(#fff, #f0f0f0);
                        }
                        .htitle: nth-child(1){
                            width: 73px;
                        }
                        .htitle: nth-child(2){
                            width: 237px;
                        }
                        .htitle: nth-child(3){
                            width: 111px;
                        }
                        .htitle: nth-child(4){
                            width: 89px;
                        }
                        .htitle: nth-child(5){
                            width: 127px;
                            border-right: none;
                        }
                    }
                    .song{
                        display: flex;
                        .item{
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
                        .item: nth-child(1){
                            width: 73px;
                            display: flex;
                            padding: 6px 18px;
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
                            width: 237px;
                            a{
                                color: #333;
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
                        .item: nth-child(3){
                            width: 111px;
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
                        .item: nth-child(4){
                            width: 89px;
                            a{
                                color: #666;
                            }
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                        .item: nth-child(5){
                            width: 127px;
                        }
                        .item: nth-child(5): hover{
                            text-decoration: underline;
                        }
                    }
                    .song: nth-child(even){
                        background-color: #f7f7f7;
                    }
                    .song: nth-child(odd){
                        background-color: #fff;
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
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                                a{
                                    font-size: 14px;
                                    color: #333;
                                }
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
        hoverIndex: ''
    }
    componentWillMount(){
        const { search } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectSongListByIdFun(id)
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            const { search } = nextProps.location
            const paramsString = search.substring(1)
            const searchParams = new URLSearchParams(paramsString)
            const id = searchParams.get('id')
            this.props.selectSongListByIdFun(id)
        }
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
    //点击歌单播放音乐
    onPlayList = list =>{
        const newList = list.filter(d=>d.fee != '1')
        this.props.pushPlayListFun(newList)
    }
    //将歌单添加到播放列表
    addPlayList = list =>{
        const newList = list.filter(d=>d.fee != '1')
        newList.map(l=>this.props.addPlayListFun(l))
    }
    //将单曲添加到播放列表
    onSong = song =>{
        if(song.fee == '1'){
            message.warn('暂无版权')
            return
        }
        this.props.addPlayListFun(song)
    }
    //点击单曲播放音乐
    onSongPlay = t => {
        if(t.fee == '1'){
            message.warn('暂无版权')
            return
        }
        this.props.selectSongUrlByIdFun(t.id)
    }
    //移动到评论区
    onMessageClick(){
        const comment = document.getElementById('comment')
        const app = document.getElementById('app-root')
        app.scrollTop = comment.offsetTop
    }
    render(){
        const { songListDetail, relatedPlayList, playingSong } = this.props
        return(
            <Root>
                {
                    JSON.stringify(songListDetail) !== '{}' ? 
                    (<div className="main">
                        <div className="left">
                            <div className="nav">
                                <div style={{ width: 208, height: 208, padding: 2, border: '1px solid #ddd' }}>
                                    <img src={songListDetail.coverImgUrl} style={{ height: 202 }} />
                                </div>
                                <div className="message">
                                    <div className="name">
                                        <div className="logo">歌单</div>
                                        <div className="title">
                                            <h3 style={{ fontSize: 20, marginBottom: 0 }}>{songListDetail.name}</h3>
                                        </div>
                                    </div>
                                    <div className="creator">
                                        <img src={songListDetail.creator.avatarUrl} style={{ height: 35 }} />
                                        <p className="nickname">{songListDetail.creator.nickname}</p>
                                        <p>{millisecond.transformFullDate(songListDetail.createTime)} 创建</p>
                                    </div>
                                    <div className="btns">
                                        <Button className="ibtn" onClick={this.onPlayList.bind(this, songListDetail.tracks)}><Icon type="play-circle" className="icon" /><span style={{ marginLeft: '5px', verticalAlign: 'text-bottom' }}>播放</span></Button>
                                        <Tooltip placement="bottomLeft" title="添加到播放列表" arrowPointAtCenter={true}>
                                            <Button onClick={this.addPlayList.bind(this, songListDetail.tracks)} className="ibtn add"><Icon type="plus" className="icon" /></Button>
                                        </Tooltip>
                                        <Button className="btn"><Icon type="folder-add" className="icon" /><span style={{ marginLeft: 0, verticalAlign: 'text-bottom' }}>{`(${millisecond.transformCount(songListDetail.subscribedCount)})`}</span></Button>
                                        <Button className="btn"><Icon type="share-alt" className="icon" /><span style={{ marginLeft: 0, verticalAlign: 'text-bottom' }}>{`(${millisecond.transformCount(songListDetail.shareCount)})`}</span></Button>
                                        <Button className="btn"><Icon type="download" className="icon" /><span style={{ marginLeft: 0, verticalAlign: 'text-bottom' }}>下载</span></Button>
                                        <Button onClick={this.onMessageClick} className="btn"><Icon type="message" className="icon" /><span style={{ marginLeft: 0, verticalAlign: 'text-bottom' }}>{`(${millisecond.transformCount(songListDetail.commentCount)})`}</span></Button>
                                    </div>
                                    {
                                        songListDetail.tags.length > 0 ?
                                        (<div className="item">
                                            <span>标签：</span>
                                            {songListDetail.tags.map((t, i)=>(
                                                <Link to={`/playlists?cat=${t}&order=hot`} key={i}><Tag>{t}</Tag></Link>
                                            ))}
                                        </div>) : ''
                                    }
                                    {
                                        songListDetail.description ? 
                                        (<div className="dec" style={{ marginTop: 10 }}>
                                            <div ref={text=>this.text=text} style={{ maxHeight: 108, overflow: 'hidden' }}>
                                                {
                                                    songListDetail.description.split('\n').map((c, i)=>(
                                                        c && <p key={i}>{i==0 ? <React.Fragment>{'介绍：' + c}</React.Fragment> : c}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="toggle"><a onClick={this.onToggle.bind(this, '108px')}>{!this.state.isVisible ? <React.Fragment>展开<Icon type="down" style={{ color: '#999' }} /></React.Fragment> : <React.Fragment>收起<Icon type="up" style={{ color: '#999' }} /></React.Fragment>}</a></div>      
                                        </div>) : ''
                                    }
                                </div>
                            </div>
                            <div className="songs">
                                <div className="header" style={{ justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex' }}>
                                        <h3>包含歌曲列表</h3>
                                        <p>{songListDetail.tracks.length}首歌</p>
                                    </div>
                                    <p style={{ fontSize: 12 }}>播放：<span style={{ color: '#c20c0c', fontWeight: 'bold' }}>{songListDetail.playCount}</span>次</p>
                                </div>
                                <ul className="list">
                                    <li className="hitem">
                                        <div className="htitle"></div>
                                        <div className="htitle">歌曲标题</div>
                                        <div className="htitle">时长</div>
                                        <div className="htitle">歌手</div>
                                        <div className="htitle">专辑</div>
                                    </li>
                                    {
                                        songListDetail.tracks.map((t, i)=>(
                                            <li key={i} className="song" onMouseEnter={this.mouseEnter.bind(this, i)} onMouseLeave={this.mouseLeave.bind(this)}>
                                                <div className="item"><p>{i+1}</p><Icon type="play-circle" onClick={this.onSongPlay.bind(this, t)} theme="filled" style={{ color: playingSong.id === t.id ? '#d31111' : '' }} className="play" /></div>
                                                <div className="item"><Link to={`/song?id=${t.id}`}>{t.name}</Link>{t.tns ? <span style={{ color: '#999' }}>{' - ('+ t.tns[0] +')'}</span> : t.alia.length > 0 ? <span style={{ color: '#999' }}>{' - ('+ t.alia[0] +')'}</span> : ''}{t.mv === 0 ? '' : <Tooltip placement="bottom" title="播放mv"><Link to={`/mv?id=${t.mv}`}><Icon type="video-camera" className="video" /></Link></Tooltip>  }</div>
                                                <div className="item">
                                                    { this.state.hoverIndex === i ? 
                                                        (<React.Fragment>
                                                            <Tooltip placement="bottomLeft" title="添加到播放列表" arrowPointAtCenter={true}>
                                                                <Icon type="plus" onClick={this.onSong.bind(this, t)} className="showIcon" />
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
                                                        :millisecond.secTotime(t.dt)}
                                                </div>
                                                <div className="item">
                                                    <Tooltip placement="bottomLeft" title={t.ar.map((a, i)=>( a.name + (t.ar.length === i+1 ? '' : '/') ))}>
                                                        {t.ar.map((a,i)=>(<React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{t.ar.length === i+1 ? '' : '/'}</React.Fragment>))}
                                                    </Tooltip>
                                                </div>   
                                                <Tooltip placement="bottomLeft" title={t.al.name} arrowPointAtCenter={true}>
                                                    <Link to={`/album?id=${t.al.id}`} className="item">{t.al.name}</Link>
                                                </Tooltip>   
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <CommentView {...this.props} />
                        </div>
                        <div className="right">
                            <div className="liker">
                                <h3>喜欢这个歌单的人</h3>
                                <div className="users">
                                    {
                                        songListDetail.subscribers.map((s, i)=>(
                                            <Tooltip key={i} placement="bottom" title={s.nickname}><img src={s.avatarUrl} className="image" /></Tooltip>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="similar">
                                <h3>相关歌单</h3>
                                <div className="list">
                                    {
                                        relatedPlayList.map((s, i)=>(
                                            <div className="item" key={i}>
                                                <Link to={`/playlist?id=${s.id}`}><img src={s.coverImgUrl} style={{ height: 50, cursor: 'pointer' }} /></Link>
                                                <div className="msg">
                                                    <Tooltip placement="bottomLeft" title={s.name} arrowPointAtCenter={true}>
                                                        <p><Link to={`/playlist?id=${s.id}`}>{s.name}</Link></p>
                                                    </Tooltip>  
                                                    <p><span style={{ color: '#999', verticalAlign: 'text-bottom' }}>by</span><span className="nickname">{s.creator.nickname}</span>{s.creator.vipType === 11 && <Icon type="star" style={{ color: '#ed7b07' }} />}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
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