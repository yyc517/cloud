import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import CommentView from './CommentView'
import { Button, Tooltip, Icon   } from 'antd';
import { Link } from 'react-router-dom'

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
                img{
                    height: 206px;
                    width: 206px;
                    border-radius: 50%;
                    border: 1px solid #000;
                    padding: 33px;
                    background-color: #212121;
                }
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
                    .item{
                        margin-top: 5px;
                        font-size: 12px;
                        a{
                            color: #0c73c2;
                        }
                        a: hover{
                            text-decoration: underline;
                        }
                        .ant-tag{
                            border-radius: 12px;
                            padding: 0 12px;
                        }
                    }
                    .btns{
                        margin: 10px 0 25px 0;
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
                            span{
                                margin-left: 5px;
                                vertical-align: text-bottom;
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
                                margin-right: 5px;
                                font-size: 15px;
                            }
                            span{
                                margin-left: 0px;
                                vertical-align: text-bottom;
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
                margin-top: 10px;
                h3{
                    font-size: 12px;
                    font-weight: bold;
                }
                p{
                    font-size: 12px;
                    line-height: 24px;
                    margin: 0;
                    color: #333;
                }
                .toggle{
                    text-align: left;
                    cursor: pointer;
                    color: #0c73c2;
                    font-size: 12px;
                    margin-top: 5px;
                }
                .toggle: hover{
                    text-decoration: underline;
                }
                .noLyric{
                    p{
                        color: #666;
                    }
                    a{
                        display: block;
                        color: #888;
                        font-size: 12px;
                        text-align: right;
                        margin-top: 120px;
                        text-decoration: underline;
                    }
                }
            }
        }
        .right{
            width: 270px;
            padding: 20px 40px 40px 30px;
            .songList, .similarSong, .download{
                margin-bottom: 30px;
                h3{
                    text-align: left;
                    font-size: 12px;
                    font-weight: bold;
                    border-bottom: 1px solid #ddd;
                    height: 25px;
                    margin-bottom: 20px;
                }
                .item{
                    display: flex;
                    margin-bottom: 15px;
                    .msg{
                        width: 140px;
                        margin-left: 10px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        a{
                            color: #000;
                            font-size: 14px;
                        }
                        a:hover{
                            text-decoration: underline;
                        }
                        p{
                            font-size: 12px;
                            color: #666;
                            height: 19px;
                        }
                        .nickname{
                            cursor: pointer;
                            margin : 0 5px;
                        }
                        .nickname: hover{
                            text-decoration: underline;
                        }
                        .vip{
                            font-family: -webkit-pictograph;
                            font-weight: bold;
                            color: #e11010;
                            font-size: 16px; 
                        }
                    }
                }
                .song{
                    display: flex;
                    margin-bottom: 10px;
                    .msg{
                        width: 156px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        text-align: left;
                        a{
                            color: #333;
                            font-size: 12px;
                        }
                        a:hover{
                            text-decoration: underline;
                        }
                        p{
                            font-size: 12px;
                            margin-bottom: 2px;
                            cursor: pointer;
                            color: #333;
                            a{
                                color: #999;
                            }
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                        p: first-child: hover{
                            text-decoration: underline;
                        }
                    }
                    .operate{
                        width: 44px;
                        line-height: 40px;
                        .icon{
                            color: #999;
                            cursor: pointer;
                        }
                        .icon: first-child{
                            margin-right: 10px;
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
export default class SongDetailView extends React.Component{
    state={
        isVisible: false
    }
    componentWillMount(){
        const { search } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectSongByIdFun(id)
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            const { search } = nextProps.location
            const paramsString = search.substring(1)
            const searchParams = new URLSearchParams(paramsString)
            const id = searchParams.get('id')
            this.props.selectSongByIdFun(id)
        }
    }
    onToggle = () =>{
        if(this.state.isVisible){
            this.text.style.maxHeight = '315px'
        }else{
            this.text.style.maxHeight = '100%'
        }
        this.setState({ isVisible: !this.state.isVisible })
    }
    //点击单曲播放音乐
    onSongPlay = song => {
        if(song.fee == '1'){
            message.warn('暂无版权')
            return
        }
        this.props.selectSongUrlByIdFun(song.id)
    }
    //将单曲添加到播放列表
    onSong = song =>{
        if(song.fee == '1'){
            message.warn('暂无版权')
            return
        }
        this.props.addPlayListFun(song)
    }
    //移动到评论区
    onMessageClick(){
        const comment = document.getElementById('comment')
        const app = document.getElementById('app-root')
        app.scrollTop = comment.offsetTop
    }
    //添加相似歌曲到播放列表
    addSong = id =>{
        this.props.selectSongByIdFun(id, data=>{
            if(data.fee == '1'){
                message.warn('暂无版权')
                return
            }
            this.props.addPlayListFun(data)
        })
    }
    render(){
        const { songDetail, lyrics, similarList, similarSongs } = this.props
        return(
            <Root>
                {
                    JSON.stringify(songDetail) !== '{}' ? 
                    (<div className="main">
                        <div className="left">
                            <div className="nav">
                                <img src={songDetail.al.picUrl} />
                                <div className="message">
                                    <div className="name">
                                        <div className="logo">单曲</div>
                                        <div className="title">
                                            <h3 style={{ fontSize: 20, marginBottom: 0 }}>{songDetail.name}</h3>
                                            {
                                                songDetail.alia.length > 0 
                                                ?<p style={{ margin: '1px 0 0', color: '#bababa', fontSize: 14 }}>{songDetail.alia[0]}</p>
                                                : ''
                                            }
                                        </div>
                                    </div>
                                    <div className="item" style={{ margin: '8px 0' }}>
                                        <span>歌手：</span>
                                        {songDetail.ar.map((a ,i)=>(
                                            <React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{songDetail.ar.length === i+1 ? '' : '/'}</React.Fragment>
                                        ))}
                                    </div>
                                    <div className="item">
                                        <span>所属专辑：</span>
                                        <Link to={`/album?id=${songDetail.al.id}`}>{songDetail.al.name}</Link>
                                    </div>
                                    <div className="btns">
                                        <Button onClick={this.onSongPlay.bind(this, songDetail)} className="ibtn"><Icon type="play-circle" className="icon" /><span>播放</span></Button>
                                        <Tooltip placement="bottomLeft" title="添加到播放列表" arrowPointAtCenter={true}>
                                            <Button onClick={this.onSong.bind(this, songDetail)} className="ibtn add"><Icon type="plus" className="icon" /></Button>
                                        </Tooltip>
                                        <Button className="btn"><Icon type="folder-add" className="icon" /><span>收藏</span></Button>
                                        <Button className="btn"><Icon type="share-alt" className="icon" /><span>分享</span></Button>
                                        <Button className="btn"><Icon type="download" className="icon" /><span>下载</span></Button>
                                        <Button onClick={this.onMessageClick} className="btn"><Icon type="message" className="icon" /><span>评论</span></Button>
                                    </div>
                                    <div className="dec">
                                        {
                                            lyrics.lyric ? 
                                            (<React.Fragment>
                                                <div ref={text=>this.text=text} style={{ maxHeight: 315, overflow: 'hidden' }}>
                                                    {
                                                        lyrics.lyric.split('\n').map((e, i)=>(
                                                            e && <p key={i}>{e.split(']')[1]}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="toggle" onClick={this.onToggle.bind(this)}>{!this.state.isVisible ? <React.Fragment>展开<Icon type="down" style={{ color: '#999' }} /></React.Fragment> : <React.Fragment>收起<Icon type="up" style={{ color: '#999' }} /></React.Fragment>}</div>      
                                            </React.Fragment>) 
                                            : (<div className="noLyric">
                                                <p>暂时没有歌词</p>   
                                                <a>上传歌词 歌曲报错</a>    
                                            </div>)
                                        }
                                    </div> 
                                </div>
                            </div>
                            <CommentView {...this.props} />
                        </div>
                        <div className="right">
                            {
                                similarList.length > 0 && (
                                    <div className="songList">
                                        <h3>包含这首歌的歌单</h3>
                                        {
                                            similarList.map((s, i)=>(
                                                <div className="item" key={i}>
                                                    <Link to={`/playlist?id=${s.id}`}><img src={s.coverImgUrl} style={{ height: 50, cursor: 'pointer' }} /></Link>
                                                    <div className="msg">
                                                        <Link to={`/playlist?id=${s.id}`}>{s.name}</Link>
                                                        <p><span style={{ color: '#999', verticalAlign: 'text-bottom' }}>by</span><span className="nickname">{s.creator.nickname}</span>{s.creator.vipType === 11 ? s.creator.userType === 200 ? <Icon type="star" style={{ color: '#ed7b07' }} /> : s.creator.userType === 2 ? <span className="vip">V</span> : '' : ''}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                            {
                                similarSongs.length > 0 && (
                                    <div className="similarSong">
                                        <h3>相似歌曲</h3>
                                        {
                                            similarSongs.map((s, i)=>(
                                                <div className="song" key={i}>
                                                    <div className="msg">
                                                        <Link to={`song?id=${s.id}`} replace={true}>{s.name}</Link>
                                                        <p>{s.artists.map((a, i)=>(
                                                            <React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{s.artists.length === i + 1 ? '' : '/'}</React.Fragment>
                                                        ))}</p>
                                                    </div>
                                                    <div className="operate">
                                                        <Tooltip placement="bottom" title="播放"><Icon type="caret-right" onClick={this.onSongPlay.bind(this, s)} className="icon" /></Tooltip>
                                                        <Tooltip placement="bottom" title="添加到播放列表"><Icon type="plus" onClick={this.addSong.bind(this, s.id)} className="icon" /></Tooltip>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div> 
                                )
                            } 
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