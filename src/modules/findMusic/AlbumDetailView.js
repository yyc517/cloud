import React from 'react'
import styled from 'styled-components'
import { millisecond } from '@utils'
import CommentView from './CommentView'
import { Button, Tooltip, Icon   } from 'antd';
import connect from '@connect'
import { Link } from 'react-router-dom'

const Root = styled.div`
    width: 100%;
    background-color: #f5f5f5;
    .main{
        display: flex;
        width: 982px;
        margin: auto;
        background-color: #fff;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        .left{
            width: 710px;
            border-right: 1px solid #ddd;
            padding: 47px 30px 40px 40px;
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
                                margin-right: 3px;
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
                    cursor: pointer;
                    color: #0c73c2;
                    font-size: 12px;
                    margin-top: 10px;
                }
                .toggle: hover{
                    text-decoration: underline;
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
                            width: 74px;
                        }
                        .htitle: nth-child(2){
                            width: 346px;
                        }
                        .htitle: nth-child(3){
                            width: 91px;
                        }
                        .htitle: nth-child(4){
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
                            width: 74px;
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
                            width: 346px;
                            a{
                                color: #333;
                            }
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                        .item: nth-child(3){
                            width: 91px;
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
                            width: 127px;
                            border-right: none;
                            a{
                                color: #666;
                            }
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                        .item: nth-child(5){
                            span{
                                cursor: pointer;
                            }
                            span: hover{
                                text-decoration: underline;
                            }
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
            .header{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                text-align: left;
                border-bottom: 1px solid #ddd;
                height: 25px;
                margin-bottom: 20px;
                h3{
                    font-weight: bold;
                    margin-bottom: 0;
                }
                a{
                    margin-bottom: 0;
                    line-height: 23px;
                    color: #666;
                }
                a: hover{
                    text-decoration: underline;
                }
            }
            .album{
                display: flex;
                margin-top: 15px;
                .msg{
                    margin-left: 10px;
                    p{
                        text-align: left;
                        margin-bottom: 5px;
                    }
                    p: first-child{
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        width: 140px;
                        a{
                            color: #000;
                        }
                    }
                    p: first-child: hover{
                        text-decoration: underline;
                    }
                    p: last-child{
                        color: #666;
                        font-size: 12px;
                    }
                }
            }
            .download{
                margin-top: 30px;
                h3{
                    font-weight: bold;
                    margin-bottom: 0;
                    font-size: 12px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                    height: 25px;
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
export default class AlbumDetailView extends React.Component{
    state={
        isVisible: false,
        hoverIndex: ''
    }
    componentWillMount(){
        const { search } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectAlbumByIdFun(id)
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            const { search } = nextProps.location
            const paramsString = search.substring(1)
            const searchParams = new URLSearchParams(paramsString)
            const id = searchParams.get('id')
            this.props.selectAlbumByIdFun(id)
        }
    }
    onToggle = () =>{
        if(this.state.isVisible){
            this.text.style.maxHeight = '170px'
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
    //点击专辑播放音乐
    onAlbumPlay = list =>{
        const newList = list.filter(d=>d.fee != '1')
        this.props.pushPlayListFun(newList)
    }
    //将专辑的歌曲添加到播放列表
    addPlayList = list =>{
        const newList = list.filter(d=>d.fee != '1')
        newList.map(l=>this.props.addPlayListFun(l))
    }
    //移动到评论区
    onMessageClick(){
        const comment = document.getElementById('comment')
        const app = document.getElementById('app-root')
        app.scrollTop = comment.offsetTop
    }
    //点击单曲播放音乐
    onSongPlay = s => {
        if(s.fee == '1'){
            message.warn('暂无版权')
            return
        }
        this.props.selectSongUrlByIdFun(s.id)
    }
    //将单曲添加到播放列表
    onSong = song =>{
        if(song.fee == '1'){
            message.warn('暂无版权')
            return
        }
        this.props.addPlayListFun(song)
    }
    render(){
        const { albumDetail, artistAlbum, playingSong } = this.props
        return(
            <Root>
                {
                    JSON.stringify(albumDetail) !== '{}' ? 
                    (<div className="main">
                        <div className="left">
                            <div className="nav">
                                <img src={albumDetail.album.blurPicUrl} style={{ height: 180, border: '1px solid #ddd' }} />
                                <div className="message">
                                    <div className="name">
                                        <div className="logo">专辑</div>
                                        <div className="title">
                                            <h3 style={{ fontSize: 20, marginBottom: 0 }}>{albumDetail.album.name}</h3>
                                            {
                                                albumDetail.album.transNames ? 
                                                (<div style={{ color: '#999' }}>{albumDetail.album.transNames.map(t=>(t))}</div>) 
                                                :''
                                            }
                                            
                                        </div>
                                    </div>
                                    <div className="item">
                                        <span>歌手：</span>
                                        {albumDetail.album.artists.map((a, i)=>(
                                            <React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{albumDetail.album.artists.length === i+1 ? '' : '/'}</React.Fragment>
                                        ))}
                                    </div>
                                    <div className="item">
                                        <span>发行时间：</span>
                                        <span>{millisecond.transformFullDate(albumDetail.album.publishTime)}</span>
                                    </div>
                                    <div className="item">
                                        <span>发行公司：</span>
                                        <span>{albumDetail.album.company}</span>
                                    </div>
                                    <div className="btns">
                                        <Button onClick={this.onAlbumPlay.bind(this, albumDetail.songs)} className="ibtn"><Icon type="play-circle" className="icon" /><span>播放</span></Button>
                                        <Tooltip placement="bottomLeft" title="添加到播放列表" arrowPointAtCenter={true}>
                                            <Button onClick={this.addPlayList.bind(this, albumDetail.songs)} className="ibtn add"><Icon type="plus" className="icon" /></Button>
                                        </Tooltip>
                                        <Button className="btn"><Icon type="folder-add" className="icon" /><span>收藏</span></Button>
                                        <Button className="btn"><Icon type="share-alt" className="icon" /><span>{`(${millisecond.transformCount(albumDetail.album.info.shareCount)})`}</span></Button>
                                        <Button className="btn"><Icon type="download" className="icon" /><span>下载</span></Button>
                                        <Button onClick={this.onMessageClick} className="btn"><Icon type="message" className="icon" /><span>{`(${millisecond.transformCount(albumDetail.album.info.commentCount)})`}</span></Button>
                                    </div>
                                </div>
                            </div>
                            {
                                albumDetail.album.description && 
                                    (<div className="dec">
                                        <h3>专辑介绍：</h3>
                                        <div ref={text=>this.text=text} style={{ maxHeight: 170, overflow: 'hidden' }}>
                                            {
                                                albumDetail.album.description.split('\n').map((e, i)=>(
                                                    e && <p key={i}>{e}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="toggle" onClick={this.onToggle.bind(this)}>{!this.state.isVisible ? <React.Fragment>展开<Icon type="down" style={{ color: '#999' }} /></React.Fragment> : <React.Fragment>收起<Icon type="up" style={{ color: '#999' }} /></React.Fragment>}</div>      
                                    </div>)
                            }
                            <div className="songs">
                                <div className="header">
                                    <h3>包含歌曲列表</h3>
                                    <p>{albumDetail.songs.length}首歌</p>
                                </div>
                                <ul className="list">
                                    <li className="hitem">
                                        <div className="htitle"></div>
                                        <div className="htitle">歌曲标题</div>
                                        <div className="htitle">时长</div>
                                        <div className="htitle">歌手</div>
                                    </li>
                                    {
                                        albumDetail.songs.map((s, i)=>(
                                            <li key={i} className="song"  onMouseEnter={this.mouseEnter.bind(this, i)} onMouseLeave={this.mouseLeave.bind(this)}>
                                                <div className="item"><p>{i+1}</p><Icon type="play-circle" onClick={this.onSongPlay.bind(this, s)} theme="filled" className="play" style={{ color: playingSong.id === s.id ? '#d31111' : '' }} /></div>
                                                <div className="item"><Link to={`/song?id=${s.id}`}>{s.name}</Link>{s.tns ? <span style={{ color: '#999' }}>{' - ('+ s.tns[0] +')'}</span> : ''}{s.mv === 0 ? '' : <Tooltip placement="bottom" title="播放mv"><Link to={`/mv?id=${s.mv}`}><Icon type="video-camera" style={{ color: '#C20C0C', marginLeft: '5px', verticalAlign: 'text-bottom' }} /></Link></Tooltip>  }</div>
                                                <div className="item">
                                                    { this.state.hoverIndex === i ? 
                                                        (<React.Fragment>
                                                            <Tooltip placement="bottomLeft" title="添加到播放列表" arrowPointAtCenter={true}>
                                                                <Icon type="plus" onClick={this.onSong.bind(this, s)} className="showIcon" />
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
                                                <div className="item">
                                                    <Tooltip placement="bottomLeft" title={s.ar.map((a, i)=>( a.name + (s.ar.length === i+1 ? '' : '/') ))}>
                                                        {s.ar.map((a,i)=>(<React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{s.ar.length === i+1 ? '' : '/'}</React.Fragment>))}
                                                    </Tooltip>
                                                </div>      
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <CommentView {...this.props} />
                        </div>
                        <div className="right">
                            <div className="header">
                                <h3>Ta的其他热门专辑</h3>
                                <Link to={`/artist/album?id=${albumDetail.album.artist.id}`}>全部></Link>
                            </div>
                            {
                                artistAlbum.slice(0, 5).map((b, i)=>(
                                    <div className="album" key={i}>
                                        <Link to={`/album?id=${b.id}`}><img src={b.picUrl} style={{ height: 50, width: 50, cursor: 'pointer' }} /></Link>
                                        <div className="msg">
                                            <Tooltip placement="bottomLeft" title={b.name} arrowPointAtCenter={true}>
                                                <p><Link to={`/album?id=${b.id}`}>{b.name}</Link></p>
                                            </Tooltip>
                                            <p>{millisecond.transformFullDate(b.publishTime)}</p>
                                        </div>
                                    </div>
                                ))
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