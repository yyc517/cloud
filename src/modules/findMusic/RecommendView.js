import React from 'react'
import styled from 'styled-components'
import { Carousel, Icon, Button, Tooltip, BackTop, message  } from 'antd'
import { Link } from 'react-router-dom'
import connect from '@connect'
import { millisecond } from '@utils'

const Root = styled.div`
    width: 100%;
    .header{
        width: 100%;
        .ant-carousel{
            text-align: center;
            .slick-slide {
                background: #1a0001;
                a{
                    width: 730px !important;
                    height: 330px !important;
                }
            }
            img{
                display: block;
                width: 730px !important;
                height: 336px;
                z-index: 1;
                cursor: pointer;
            }
            .slick-dots{
                z-index: 1;
                bottom: 15px;
            }
            .slick-dots li{
                margin: 0 10px;
                button{
                    width: 6px;
                    height: 6px;
                    border-radius: 5px;
                }
                button: hover{
                    background-color: #C20C0C;
                }
            } 
            .slick-dots li.slick-active button{
                width: 7px;
                background-color: #C20C0C;
            }
        }
        .icon{
            font-size: 47px;
            position: absolute;
            top: 230px;
            color: #FFF;
            cursor: pointer;
            padding: 11px 0;
        }
        .icon: hover{
            background-color: #33333347;
            
        }
        .left{
            left: 140px;
        }
        .right{
            right: 140px;
        }
    }
    .content{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        .main{
            width: 984px;
            height: 100%;
            margin: auto;
            display: flex;
            .left{
                width: 732px;
                border-left: 1px solid #ddd;
                padding: 20px 20px;
                background-color: #fff;
                .charts, .album, .hot{
                    .top{
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 2px solid #C10D0C;
                        .title{
                            padding-left: 10px;
                            display: flex;
                           .label{
                                font-size: 20px;
                                color: #333;
                                margin-left: 12px;
                                cursor: pointer;
                                height: 36px;
                           } 
                           .type{
                               line-height: 36px;
                               margin-left: 5px;
                               a{
                                   color: #666;
                                   font-size: 12px;
                                   margin: 0 15px;
                                }
                                a: hover{
                                    text-decoration: underline;
                                }
                                span{
                                    font-size: 12px;
                                }
                            }
                        }
                        .more{
                            line-height: 40px;
                            height: 30px;
                            a{
                                font-size: 12px;
                                color: #666;
                            }
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                    }
                    .songsList{
                        display: flex;
                        width: 728px;
                        flex-wrap: wrap;
                        margin-left: -41px;
                        .songsInfo{
                            margin: 20px 0 20px 42px;
                            width: 140px;
                            position: relative;
                            .bottom{
                                top: 113px;
                                height: 27px;
                                background: #19181869;
                                width: 140px;
                                border-top: 1px solid #000;
                                position: absolute;
                                display: flex;
                                justify-content: space-between;
                                .playCount{
                                    line-height: 27px;
                                    margin-left: 10px;
                                    color: #ddd;
                                    font-size: 12px;
                                }
                                .play{
                                    line-height: 30px;
                                    color: #ddd;
                                    margin-right: 10px;
                                    font-size: 18px;
                                    cursor: pointer;
                                }
                                .play: hover{
                                    color: #fff;
                                }
                            }
                            .dec{
                                font-size: 14px;
                                color: #000;
                                text-align: left;
                                margin: 5px 0 0;
                                display: block;
                            }
                            .dec: hover{
                                text-decoration: underline;
                            }
                        }
                    }
                    .albumList{
                        width: 692px;
                        background-color: #f5f5f5;
                        border: 1px solid #d3d3d3;
                        overflow: hidden;
                        margin: 20px 0;
                        position: relative;
                        height: 190px;
                        padding: 20px 30px;
                        .albumInfo{
                            width: 100px;
                            margin: 10px 0 0 32px;
                            .artistName, .albumName{
                                display: block;
                                font-size: 12px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                text-align: left;
                                margin: 2px 0;
                                color: #000;
                                a{
                                    color: #666;
                                }
                                a: hover{
                                    text-decoration: underline;
                                }
                            }
                            .albumName: hover{
                                text-decoration: underline;
                            }
                        }
                        .icon{
                            position: absolute;
                            cursor: pointer;
                            font-size: 23px;
                            font-weight: bold;
                            color: #666;
                        }
                        .icon: hover{
                            color: #000;
                        }
                        .lt{
                            left: 8px;
                            top: 70px;
                        }
                        .rt{
                            right: 8px;
                            top: 70px;
                        }
                    }
                    .chartsList{
                        display: flex;
                        margin-top: 20px;
                        .chart: nth-child(1){
                            border-left: 1px solid #ddd;
                        }
                        .chart{
                            border-top: 1px solid #ddd;
                            border-right: 1px solid #ddd;
                            border-bottom: 1px solid #ddd;
                            width: 230px;
                            background-color: #f4f4f4;
                            .title{
                                display: flex;
                                margin: 22px 0 22px 22px;
                                .pic{
                                    border: 1px solid #423e3f70;
                                    box-shadow: 0px 5px 8px #888888;
                                }
                                .name{
                                    text-align: left;
                                    padding: 5px 0 0 10px;
                                    a{
                                        color: #000;
                                        font-weight: bold;
                                        display: block;
                                        margin-bottom: 8px;
                                    }
                                    a: hover{
                                        text-decoration: underline;
                                    }
                                    .sign{
                                        font-size: 22px;
                                        color: #c1c1c1;
                                        margin-right: 10px;
                                        cursor: pointer;
                                    }
                                    .sign: hover{
                                        color: #777;
                                    }
                                }
                            }
                            .songs{
                                padding: 0;
                                margin: 0;
                                .more{
                                    width: 100%;
                                    flex-direction: row-reverse;
                                    padding-right: 25px;
                                    a{
                                        color: #000;
                                    }
                                    a: hover{
                                        text-decoration: underline;
                                    }
                                }
                                li{
                                    text-align: left;
                                    padding: 0 0 0 30px;
                                    height: 32px;
                                    font-size: 12px;
                                    line-height: 32px;
                                    color: #000;
                                    display: flex;
                                    justify-content: space-between;
                                    .song{
                                        display: flex;
                                        .songName{
                                            color: #000;
                                            width: 170px;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                            white-space: nowrap;
                                        }
                                        .songName: hover{
                                            text-decoration: underline;
                                        }
                                        p{
                                            margin-bottom: 0;
                                        }
                                    }
                                    .icons{
                                        .anticon{
                                            font-size: 16px;
                                            margin-right: 7px;
                                            cursor: pointer;
                                            color: #777;
                                            line-height: 32px;
                                        }
                                        .anticon: hover{
                                            color: #333;
                                        }
                                    }
                                }
                                li: nth-child(odd){
                                    background-color: #e8e8e8;
                                    list-style: none;
                                }
                                li: nth-child(even){
                                    background-color: #f4f4f4;
                                    list-style: none;
                                }
                            }
                        }
                    }
                }
            }
            .right{
                width: 252px;
                background-color: #fff;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
                .login{
                    background: linear-gradient(#fcfcfc, #e1e1e1);
                    text-align: center;
                    .words{
                        padding: 16px 20px 0px 20px;
                        text-align: left;
                        font-size: 12px;    
                        line-height: 22px;
                        font-family: Arial, Helvetica, sans-serif;
                    }
                    .loginBtn{
                        background: linear-gradient(#f33c3c, #C20C0C);
                        color: #fff;
                        border: 1px solid #C20C0C;
                        font-size: 13px;
                        padding: 0 20px;
                        margin: 5px 0 15px;
                    }  
                    .loginBtn: hover{
                        background: linear-gradient(#C20C0C, #f33c3c);
                    }
                } 
                .musician{
                    width: 100%;
                    height: 100%;
                    border-top: 1px solid #c1c1c1;
                    .singers, .anchors{
                        width: 200px;
                        margin: auto;
                        .singerList{
                            padding: 7px 0;
                            .singerItem{
                                list-style: none;
                                margin-top: 15px;
                                background-color: #fafafa;
                                a{
                                    display: flex;
                                    .info{
                                        border: 1px solid #ddd;
                                        border-left: none;
                                        width: 100%;
                                        padding-left: 15px;
                                        overflow: hidden;
                                        h4{
                                            margin: 7px 0;
                                            text-align: left;
                                            font-weight: bold;
                                        }
                                        p{
                                            margin: 0;
                                            font-size: 12px;
                                            color: #666;
                                            text-align: left;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                        }
                                    }
                                } 
                            }
                        }
                        .anchorList{
                            padding: 7px 0;
                            .anchorItem{
                                display: flex;
                                list-style: none;
                                margin-top: 15px;
                                    .info{
                                        width: 100%;
                                        padding-left: 10px;
                                        overflow: hidden;
                                        text-align: left;
                                        a{
                                            margin: 2px 0;
                                            color: #000;
                                            font-size: 12px;
                                            display: block;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                        }
                                        a: hover{
                                            text-decoration: underline;
                                        }
                                        p{
                                            margin: 0;
                                            font-size: 12px;
                                            color: #666;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                        }
                                    }
                            }
                        }
                        .singerItem: hover{
                            background-color: #eee;
                        }
                        .application{
                            width: 100%;
                            font-size: 12px;
                            font-weight: bold;
                            height: 31px;
                            background: linear-gradient(#fdfdfd, #fbfbfb);
                            border: 1px solid #c4c4c4;
                        }
                        .application: hover{
                            background: #fff;
                            color: rgba(0, 0, 0, 0.65);
                        }
                    }
                    .anchors{
                        margin-top: 17px; */
                    }
                    .nav{
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 1px solid #ccc;
                        padding: 10px 0 5px 0;
                        .title{
                            font-size: 12px;
                            font-weight: bold;
                            font-family: Arial, Helvetica, sans-serif;
                        }
                        .more{
                            font-family: Arial, Helvetica, sans-serif;
                            line-height: 21px;
                            height: 18px;
                            color: #777;
                            font-size: 12px;
                        }
                        .more: hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
    .backTop{
        width: 50px;
        height: 45px;
        background: #f5f5f5;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 12px;
        color: #000;
        font-family: serif;
    }
`
@connect('findMusic')
export default class RecommendView extends React.Component{
    state={
        chartsList: [],
        hoverIndex: ''
    }
    componentWillMount(){
        this._isMounted = true
        this.props.loadBannerFun()
        this.props.loadPersonalizedFun()
        this.props.loadPlayListHotFun()
        this.props.loadAlbumsFun()
        this.props.loadAllTopListFun()
        this.props.selectArtistByCodeFun('5001', '')
        this.props.loadRecommendDjFun()
        for(let i=0; i<3; i++){
            this.props.loadTopListFun(i,data=>{
                this.setState({ chartsList: [...this.state.chartsList, {...data, index: i}] })
            })
        }
    }
    /**上一页 */
    onPrev = () =>{
        this.carousel.prev()
    }
    /**下一页 */
    onNext = () =>{
        this.carousel.next()
    }
    onMove = () =>{
        if(parseInt(this.albums.style.left) >= 0){
            this.albums.style.left = parseInt(this.albums.style.left) - 660 + 'px'
        }else{
            this.albums.style.left = parseInt(this.albums.style.left) + 660 + 'px'
        }
    }
    mouseEnter = (index) =>{
        this.setState({ hoverIndex: index })
    }
    mouseLeave = () =>{
        this.setState({ hoverIndex: '' })
    }
    //点击歌单播放音乐
    onPlayList = id =>{
        this.props.selectSongListByIdFun(id, data=>{
            const list = data.filter(d=>d.fee != '1')
            this.props.pushPlayListFun(list)
        })
    }
    //点击排行榜播放音乐
    onChartsList = list =>{
        const newList = list.filter(d=>d.fee != '1')
        this.props.pushPlayListFun(newList)
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
    onPlaySong = t => {
        if(t.fee == '1'){
            message.warn('暂无版权')
            return
        }
        this.props.selectSongUrlByIdFun(t.id)
    }
    render(){
        const { banners, personalized, albums, hotCatList, artists, djRadios } = this.props
        const { chartsList } = this.state
        return(
            <Root>
                <div className="header">
                    <Carousel effect="fade" autoplay={true} ref={carousel=>this.carousel=carousel}>
                            {
                                banners.map((b, i)=>(
                                    b.targetType == 3000 ? (<a href={b.url} target='_blank' key={i}><img src={b.imageUrl} /></a>)
                                    : (<Link key={i} to={`/${b.targetType == 1 ? `song?id=${b.targetId}` : b.targetType == 10 ? `album?id=${b.targetId}` : b.targetType == 1004 ? `mv?id=${b.targetId}` : b.targetType == 1000 ? `playlist?id=${b.targetId}` : ''}`}>
                                        <img src={b.imageUrl} />
                                    </Link>)
                                ))
                            }
                    </Carousel>
                    <Icon className="icon left" type="left" onClick={this.onPrev.bind(this)} />
                    <Icon className="icon right" type="right" onClick={this.onNext.bind(this)} />
                </div>
                <div className="content">
                    <div className="main">
                        <div className="left">
                            <div className="hot">
                                <div className="top">
                                    <div className="title">
                                        <Icon type="cloud" theme="filled" style={{ color: '#C20C0C', fontSize: '18px', lineHeight: '38px', height: '30px' }} />
                                        <Link className="label" to={`/playlists`}>热门推荐</Link>
                                        <div className="type">
                                            {
                                                hotCatList.slice(0,5).map((h, i)=>(
                                                    <React.Fragment key={i}>
                                                        <Link to={`/playlists?cat=${h.name}`}>{h.name}</Link>{hotCatList.length === i+1 ? '' : '|'}
                                                    </React.Fragment>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="more"><Link to={`/playlists`}>更多</Link><Icon type="arrow-right" style={{ color: '#C20C0C', marginLeft: '5px' }} /></div>
                                </div>
                                <div className="songsList">
                                    {
                                        personalized.slice(0,8).map((e, i)=>(
                                            <div className="songsInfo" key={i}>
                                                <Link to={`/playlist?id=${e.id}`}><img src={e.picUrl} style={{ width: '140px', cursor: 'pointer' }} /></Link>
                                                <div className="bottom">
                                                    <div className="playCount"><Icon type="customer-service" theme="filled" style={{ marginRight: '5px', fontSize: 14 }} />{millisecond.transformCount(e.playCount)}</div>
                                                    <Icon type="play-circle" onClick={this.onPlayList.bind(this, e.id)} className="play" />
                                                </div>
                                                <Link to={`/playlist?id=${e.id}`} className="dec">{e.name}</Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="album">
                                <div className="top">
                                    <div className="title">
                                        <Icon type="cloud" theme="filled" style={{ color: '#C20C0C', fontSize: '18px', lineHeight: '38px', height: '30px' }} />
                                        <Link className="label" to={`/newAlbum`}>新碟上架</Link>
                                    </div>
                                    <div className="more"><Link to={`/newAlbum`}>更多</Link><Icon type="arrow-right" style={{ color: '#C20C0C', marginLeft: '5px' }} /></div>
                                </div>
                                <div className="albumList">
                                    <div ref={albums=>this.albums=albums} style={{ width: '1320px', display: 'flex', position: 'absolute', left: '0', transition:'left 1s' }}>
                                        {
                                            albums.slice(0,10).map((e, i)=>(
                                                <div className="albumInfo" key={i}>
                                                    <Link to={`/album?id=${e.id}`}><img src={e.picUrl} style={{ width: '100px', cursor: 'pointer' }} /></Link>
                                                    <Link to={`/album?id=${e.id}`} className="albumName">{e.name}</Link>
                                                    <p className="artistName">
                                                        <Tooltip placement="bottomLeft" title={e.artists.map((a, i)=>( a.name + (e.artists.length === i+1 ? '' : '/') ))}>
                                                            {e.artists.map((a ,i)=>(
                                                                <React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{e.artists.length === i+1 ? '' : '/'}</React.Fragment>
                                                            ))}
                                                        </Tooltip>
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <a className="icon lt" onClick={this.onMove.bind(this)}>&lt;</a>
                                    <a className="icon rt" onClick={this.onMove.bind(this)}>&gt;</a>
                                </div>
                            </div>
                            <div className="charts">
                                <div className="top">
                                    <div className="title">
                                        <Icon type="cloud" theme="filled" style={{ color: '#C20C0C', fontSize: '18px', lineHeight: '38px', height: '30px' }} />
                                        <Link className="label" to={`/toplist`}>榜单</Link>
                                    </div>
                                    <div className="more"><Link to={`/toplist`}>更多</Link><Icon type="arrow-right" style={{ color: '#C20C0C', marginLeft: '5px' }} /></div>
                                </div>
                                <div className="chartsList">
                                    {
                                        chartsList.map((c, i)=>(
                                            <div className="chart" key={i}>
                                                <div className="title">
                                                    <Link to={`/toplist?id=${c.id}`} className="pic"><img src={c.coverImgUrl} style={{ height: '80px' }} /></Link>
                                                    <div className="name">
                                                        <Link to={`/toplist?id=${c.id}`}>{c.name}</Link>
                                                        <Tooltip placement="bottom" title='播放'><Icon onClick={this.onChartsList.bind(this, chartsList[i].tracks)} className="sign" type="play-circle" /></Tooltip>
                                                        <Tooltip placement="bottom" title='收藏'><Icon className="sign" type="folder-add" /></Tooltip>
                                                    </div>
                                                </div>
                                                <ul className="songs">
                                                    {
                                                        c.tracks.slice(0,10).map((t, ind)=>(
                                                            <li key={ind} onMouseEnter={this.mouseEnter.bind(this, i+''+ind)} onMouseLeave={this.mouseLeave.bind(this)}>
                                                                <div className="song">
                                                                    <p style={{ color: ind<3 ? '#c10d0c' : '#666', fontSize: '16px', fontFamily: 'auto', width: '25px', display: 'block' }}>{ind+1}</p>
                                                                    <Link to={`/song?id=${t.id}`} className="songName" style={this.state.hoverIndex === i+''+ind ? {width: 102} : {}}>{t.name}</Link>
                                                                </div>
                                                                {
                                                                    this.state.hoverIndex === i+''+ind ?
                                                                    (<div className="icons">
                                                                        <Tooltip placement="bottomLeft" title='播放'><Icon type="play-circle" onClick={this.onPlaySong.bind(this, t)} /></Tooltip>
                                                                        <Tooltip placement="bottomLeft" title='添加到播放列表'><Icon type="plus" onClick={this.onSong.bind(this, t)} /></Tooltip>
                                                                        <Tooltip placement="bottomLeft" title='收藏'><Icon type="folder-add" /></Tooltip>
                                                                    </div>)
                                                                    : ''
                                                                }
                                                            </li>
                                                        ))
                                                    }
                                                    <li className="more"><Link to={`/toplist?id=${c.id}`}>查看更多></Link></li>
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="login">
                                <p className="words">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                                <Button className="loginBtn">用户登录</Button>
                            </div>
                            <div className="musician">
                                <div className="singers">
                                    <div className="nav">
                                        <span className="title">入驻歌手</span>
                                        <Link to={`/artists?id=5001`} className="more">查看全部></Link>
                                    </div>
                                    <ul className="singerList">
                                        {
                                            artists.slice(0, 5).map((s, i)=>(
                                                <li className="singerItem" key={i}><a>
                                                    <div><img src={s.img1v1Url} style={{ width: 62, height: 62 }} /></div>    
                                                    <div className="info"><h4>{s.name}</h4><p>入驻音乐人</p></div>
                                                </a></li>
                                            ))
                                        }
                                    </ul>
                                    <Button className="application">申请成为网易音乐人</Button>
                                </div>
                                <div className="anchors">
                                    <div className="nav">
                                        <span className="title">推荐电台</span>
                                    </div>
                                    <ul className="anchorList">
                                        {
                                            djRadios.slice(0, 5).map((s, i)=>(
                                                <li className="anchorItem" key={i}>
                                                    <Link to={`/radio?id=${s.id}`}><img src={s.picUrl} style={{ height: 40, width: 40, cursor: 'pointer' }} /></Link>    
                                                    <div className="info">
                                                        <Link to={`/radio?id=${s.id}`}>{s.name}</Link>
                                                        <p>{s.copywriter}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <BackTop>
                    <div className="backTop">
                        <Icon type="up" />
                        <p style={{ marginBottom: 0 }}>TOP</p>
                    </div>
                </BackTop> */}
            </Root>
        )
    }
}