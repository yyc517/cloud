import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import { Icon, Button, Tooltip } from 'antd'
import { millisecond } from '@utils'
import { Link } from 'react-router-dom'
import CommentView from './CommentView'

const Root = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .main{
        width: 984px;
        height: 100%;
        display: flex;
        margin: auto;
        .left{
            width: 244px;
            background-color: #f9f9f9;
            border-left: 1px solid #ddd;
            padding-top: 10px;
            h3{
                font-weight: bold;
                text-align: left;
                margin: 20px 0 20px 15px;
                font-size: 15px;
            }
            .list{
                padding: 0;
                list-style: none;
                .item{
                    display: flex;
                    padding: 10px 0 10px 10px;
                    text-decoration: none;
                }
                .item: hover{
                    background-color: #e6e6e666;
                }
                .dec{
                    font-size: 12px;
                    margin-left: 10px;
                    p: nth-child(1){
                        text-align: left;
                        margin-bottom: 5px;
                        color: #000;
                    }
                    p: nth-child(2){
                        text-align: left;
                        margin-bottom: 0;
                        color: #999;
                    }
                }
            }
        }
        .right{
            width: 740px;
            height: 100%;
            background-color: #fff;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            padding: 47px 30px 40px 40px;
            .listTop{
                display: flex;
                .pic{
                    border: 1px solid #ddd;
                    padding: 3px;
                }
                .nav{
                    text-align: left;
                    padding: 20px 0 0 30px;
                    .ibtn{
                        border: 1px solid #3984ce;
                        background: -webkit-linear-gradient(#4493dc, #1e6fbf);
                        color: #fff;
                        padding: 0 10px;
                        font-size: 12px;
                        .icon{
                            color: #fff;
                            line-height: 33px;
                            height: 30px;
                            font-size: 17px;
                        }
                    }
                    .add{
                        margin: 0 8px 0 -2px;
                        border-left: 1px solid #3170b5;
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }
                    .btn{
                        background: -webkit-linear-gradient(#fefefe, #f1f1f1);
                        border: 1px solid #b7b7b7;
                        color: #000;
                        padding: 0 10px;
                        margin-right: 8px;
                        font-size: 12px;
                        .icon{
                            line-height: 33px;
                            height: 30px;
                            margin-right: 5px;
                            font-size: 17px;
                        }
                    }
                    .btn: hover{
                        color: #000;
                        border: 1px solid #ddd;
                    }
                }
            }
            .charts{
                margin-top: 40px;
                .info{
                    display: flex;
                    justify-content: space-between;
                }
                .tracks{    
                    padding: 0;
                    margin-bottom: 0;
                    border-bottom: 1px solid #ddd;
                   .title{
                        display: flex;
                        text-align: left;
                        background: -webkit-linear-gradient(#ffffff, #f8f8f8);
                        height: 39px;
                        .tname{
                            width: 407px;
                            border: 1px solid #d9d9d9;
                            border-left: none;
                            line-height: 39px;
                            padding-left: 8px;
                            font-size: 12px;
                            border-top: 2px solid #c20c0c
                        }
                        .tname: nth-child(1){
                            border-left: 1px solid #d9d9d9;
                            width: 78px;
                        }
                        .tname: nth-child(2){
                            width: 407px;
                        }
                        .tname: nth-child(3){
                            width: 91px;
                        }
                        .tname: nth-child(4){
                            width: 93px;
                        }
                   } 
                   .track{
                        display: flex;
                        list-style: none;
                        text-align: left;
                        border-left: 1px solid #ddd;
                        border-right: 1px solid #ddd;
                        .index{
                            width: 78px;
                            text-align: center;
                            color: #999;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .name{
                            width: 407px;
                            padding: 6px 10px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            .playIcon{
                                font-size: 17px;
                                color: rgb(172, 172, 172);
                                vertical-align: middle;
                                margin-right: 8px;
                                cursor: pointer;
                            }
                            .playIcon: hover{
                                color: #444
                            }
                            .song{
                                vertical-align: middle;
                                font-size: 12px;
                                a{
                                    color: #000; 
                                }
                                a: hover{
                                    text-decoration: underline;
                                }
                            }
                        }
                        .time{
                            width: 91px;
                            padding: 6px 0 6px 10px;
                            display: flex;
                            align-items: center;
                            font-size: 12px;
                            .showIcon{
                                margin-right: 5px;
                                font-size: 14px;
                                cursor: pointer;
                                color: #777;
                            }
                            .showIcon: hover{
                                color: #000;
                            }
                        }
                        .singer{
                            width: 93px;
                            padding: 6px 10px;
                            align-items: center;
                            font-size: 12px;
                            display: flex;
                            p{
                                margin-bottom: 0;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                a{
                                    margin-bottom: 0;
                                    cursor: pointer;
                                    color: #333;
                                }
                                a: hover{
                                    text-decoration: underline;
                                }
                            }
                        }
                   }
                   .track: nth-child(odd){
                       background-color: #fff;
                   }
                   .track: nth-child(even){
                        background-color: #f7f7f7;
                    }
                }
            }
        }
    }
`
@connect('findMusic')
export default class ChartsView extends React.Component{
    state={
        topListIndex: {
            '3779629': "0",
            '3778678': "1",
            '2884035': "2",
            '19723756': "3",
            '10520166': "4",
            '180106': "5",
            '60198': "6",
            '21845217': "7",
            '11641012': "8",
            '120001': "9",
            '60131': "10",
            '10169002': "16",
            '27135204': "19",
            '112463': "20",
            '3812895': "21",
            '71385702': "22",
            '991319590': "23"
        },
        hoverIndex: ''
    }
    componentWillMount(){
        this.getSearch(this.props.location.search)
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            const { search } = nextProps.location
            this.getSearch(search)
        }
    }
    getSearch(search){
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectPlaylistFun('全部', 'hot')
        this.props.loadAllTopListFun()
        if(id){
            this.props.loadTopListFun(this.state.topListIndex[id] || '11')
        }else{
            this.props.loadTopListFun('3')
        }
    }
    mouseEnter = (index) =>{
        this.setState({ hoverIndex: index })
    }
    mouseLeave = () =>{
        this.setState({ hoverIndex: '' })
    }
    //点击排行榜播放音乐
    onChartsPlay = list =>{
        const newList = list.filter(d=>d.fee != '1')
        this.props.pushPlayListFun(newList)
    }
    //将排行榜的歌曲添加到播放列表
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
        const { topList, listInfo } = this.props
        const id = new URLSearchParams(this.props.location.search.substring(1)).get('id')
        return(
            <Root>
                <div className="main">
                    <div className="left">
                        <h3>云音乐特色榜</h3>
                        <ul className="list">
                            {
                                topList.map((l, i)=>(
                                    l.ToplistType && <Link to={`/toplist?id=${l.id}`} style={{ backgroundColor: !id && i === 0 ? '#e2e2e2' : l.id == id ? '#e2e2e2': '' }} className="item" key={i}>
                                        <img src={l.coverImgUrl} style={{ height: '40px' }} />
                                        <div className="dec"><p>{l.name}</p><p>{l.updateFrequency}</p></div>
                                    </Link>
                                ))
                            }
                        </ul>
                        <h3>全球媒体榜</h3>
                        <ul className="list">
                            {
                                topList.map((l, i)=>(
                                    !l.ToplistType && <Link to={`/toplist?id=${l.id}`} style={{ backgroundColor: l.id == id ? '#e2e2e2': '' }} className="item" key={i}>
                                        <img src={l.coverImgUrl} style={{ height: '40px' }} />
                                        <div className="dec"><p>{l.name}</p><p>{l.updateFrequency}</p></div>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="right">
                        <div className="listTop">
                            <div className="pic"><img src={listInfo.coverImgUrl} style={{ height: '150px' }} /></div>
                            <div className="nav">
                                <h2>{listInfo.name}</h2>
                                <p><Icon type="clock-circle" style={{ marginRight: '5px' }} />最近更新：{millisecond.transformDate(listInfo.updateTime)}</p>
                                <Button onClick={this.onChartsPlay.bind(this, listInfo.tracks)} className="ibtn"><Icon type="play-circle" className="icon" /><span style={{ marginLeft: '5px' }}>播放</span></Button>
                                <Tooltip placement="bottomLeft" title="添加到播放列表" arrowPointAtCenter={true}>
                                    <Button onClick={this.addPlayList.bind(this, listInfo.tracks)} className="ibtn add"><Icon type="plus" className="icon" /></Button>
                                </Tooltip>
                                <Button className="btn"><Icon type="folder-add" className="icon" />{listInfo.subscribedCount}</Button>
                                <Button className="btn"><Icon type="share-alt" className="icon" />{listInfo.shareCount}</Button>
                                <Button className="btn"><Icon type="download" className="icon" /><span style={{ marginLeft: 0 }}>下载</span></Button>
                                <Button onClick={this.onMessageClick} className="btn"><Icon type="message" className="icon" />{listInfo.commentCount}</Button>
                            </div>
                        </div>
                        <div className="charts">
                            <div className="info">
                                <h3 style={{ fontSize: '20px', marginBottom: 0 }}>歌曲列表<span style={{ fontSize: '12px', marginLeft: '20px', color: '#666' }}>{listInfo.trackCount}首歌</span></h3>
                                <p style={{ fontSize: '12px', lineHeight: '36px', height: '25px', marginBottom: 0, color: '#666' }}>播放：<span style={{ color: '#c20c0c', fontWeight: 'bold' }}>{listInfo.playCount}</span>次</p>
                            </div>
                            <ul className="tracks">
                                <li className="title">
                                    <div className="tname"></div>
                                    <div className="tname">标题</div>
                                    <div className="tname">时长</div>
                                    <div className="tname">歌手</div>
                                </li>
                                {
                                    JSON.stringify(listInfo)!='{}' && listInfo.tracks.map((t, i)=>(
                                        <li className="track" key={i} onMouseEnter={this.mouseEnter.bind(this, i)} onMouseLeave={this.mouseLeave.bind(this)}>
                                            <div className="index">{i + 1}</div>
                                            <div className="name">
                                                { i < 3 && <Link to={`/song?id=${t.id}`}><img src={t.al.picUrl} style={{ height: '50px', marginRight: '14px' }} /></Link>}
                                                <Icon type="play-circle" onClick={this.onSongPlay.bind(this, t)} className="playIcon" />
                                                <span className="song">
                                                    <Link to={`/song?id=${t.id}`}>{t.name}</Link>
                                                    <span style={{ color: '#aeaeae' }}>
                                                        {t.alia.length > 0 && ` - (${t.alia})`}
                                                        { t.mv != 0 && <Link to={`/mv?id=${t.mv}`}><Icon type="video-camera" style={{ color: '#C20C0C', marginLeft: '5px' }} /></Link>}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="time">
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
                                                    : millisecond.secTotime(t.dt)}
                                            </div>
                                            <div className="singer">
                                                <Tooltip placement="bottomLeft" title={t.ar.map((a, i)=> t.ar.length === i + 1 ? a.name : a.name + '/' )} arrowPointAtCenter={true}>
                                                    <p>{t.ar.map((a, i)=> <React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{t.ar.length === i + 1 ? '' : '/'}</React.Fragment>)}</p>
                                                </Tooltip>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <CommentView {...this.props} width="602px" />
                    </div>
                </div>
            </Root>
        )
    }
}