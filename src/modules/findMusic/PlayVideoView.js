import React from 'react'
import styled from 'styled-components'
import { Button, Icon, Input, Tooltip, Slider } from 'antd'
import CommentView from './CommentView'
import connect from '@connect'
import { Link } from 'react-router-dom'
import { millisecond } from '@utils'

const Root = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .main{
        width: 982px;
        margin: auto;
        background-color: #fff;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        display: flex;
        .left{
            width: 709px;
            padding: 30px 30px 40px 40px;
            border-right: 1px solid #ddd;
            .video{
                text-align: left;
                .title{
                    display: flex;
                    height: 32px;
                    .name{
                        font-size: 24px;
                        height: 32px;
                        line-height: 14px;
                        margin: 0 0 0 5px; 
                    }
                    .artist{
                        color: #0c73c2;
                        margin: 0 0 0 8px;
                    }
                    .artist: hover{
                        text-decoration: underline;
                    }
                }
                .media{
                    position: relative;
                    margin-bottom: 8px;
                    height: 360px;
                    .mv{
                        width: 100%;
                        height: 100%;
                        background-color: #000;
                    }
                    .pause{
                        position: absolute;
                        top: 150px;
                        left: 290px;
                        font-size: 40px;
                        color: #fff;
                        border: 2px solid #5a5a5a;
                        border-radius: 30px;
                        cursor: pointer;
                        padding: 7px 6px 0px 9px;
                        height: 59px;
                    }
                    .pause: hover{
                        color: #fff;
                        border: 2px solid #fff;
                        box-shadow: 0 0 5px #f3f3f3;
                    }
                    .controls{
                        position: absolute;
                        bottom: 0;
                        display: flex;
                        width: 100%;
                        height: 50px;
                        .play{
                            font-size: 16px;
                            color: #fff;
                            border: 2px solid #5a5a5a;
                            border-radius: 14px;
                            padding: 3px;
                            cursor: pointer;
                            margin: 13px 10px 0;
                            height: 26px;
                        }
                        .play: hover{
                            color: #fff;
                            border: 2px solid #7d7d7d;
                            box-shadow: 0 0 5px #f3f3f3;
                        }
                        .rateSlider{
                            width: 385px;
                            margin: 21px 11px 10px 9px;
                            .ant-slider-rail{
                                height: 5px;
                                background-color: #333;
                                border-radius: 6px;
                                border-bottom: 1px solid #3c3c3c;
                                border-top: 1px solid #000;
                            }
                            .ant-slider-track{
                                height: 4px;
                                top: 5px;
                                background-color: #c70c0c;
                            }
                            .ant-slider-handle{
                                width: 14px;
                                height: 14px;
                                margin-top: -4px;
                                background-color: #c70c0c;
                                border: 5px solid #fff;
                            }
                            .ant-slider-handle: focus{
                                box-shadow: 0 0 10px #f3f3f3;
                            }
                        }
                        .time{
                            color: rgba(255, 255, 255, 0.5);
                            line-height: 54px;
                            font-size: 12px;
                        }
                        .sound{
                            position: relative;
                            line-height: 54px;
                            margin-left: 20px;
                            .anticon{
                                color: rgba(255, 255, 255, 0.5);
                                cursor: pointer;
                                font-size: 16px;
                            }
                            .anticon: hover{
                                color: #fff;
                            }
                            .volume{
                                position: absolute;
                                bottom: 40px;
                                height: 85px;
                                border: 1px solid #3a3a3a;
                                margin-left: -4px;
                                background-color: #0000007a;
                                display: none;
                                .ant-slider{
                                    width: 12px;
                                    height: 77%;
                                    margin: 8px 6px;
                                    padding: 0 4px;
                                    .ant-slider-rail{
                                        background-color: #484848;
                                    }
                                    .ant-slider-track{
                                        background-color: #c70c0c;
                                    }
                                    .ant-slider-handle{
                                        width: 12px;
                                        height: 12px;
                                        margin-top: -5px;
                                        background-color: #c70c0c;
                                        border: 4px solid #fff;
                                        margin-left: -4px;
                                    }
                                    .ant-slider-handle: focus{
                                        box-shadow: 0 0 10px #f3f3f3;
                                    }
                                }
                                .arrow{
                                    width: 8px;
                                    height: 8px;
                                    background-color: #000;
                                    border-right: 1px solid #3a3a3a;
                                    border-bottom: 1px solid #3a3a3a;
                                    transform: rotate(45deg);
                                    margin-left: 8px;
                                }
                            }
                        }
                        .sound: hover > .volume{
                            display: block;
                        }
                        .split{
                            color: rgba(255,255,255,0.5);
                            line-height: 52px;
                            margin: 0 8px;
                        }
                        .sharpness{
                            color: rgba(255,255,255,0.5);
                            line-height: 52px;
                            font-size: 12px;
                            position: relative;
                            width: 33px;
                            text-align: center;
                            .clear{
                                position: absolute;
                                bottom: 40px;
                                color: #fff;
                                width: 60px;
                                border: 1px solid #3a3a3a;
                                margin-left: -17px;
                                display: none;
                                -webkit-box-orient: vertical;
                                -webkit-box-direction: reverse;
                                height: 92px;
                                .item{
                                    height: 28px;
                                    line-height: 28px;
                                    text-align: center;
                                    cursor: pointer;
                                    width: 100%;
                                    display: flex;
                                    .checked{
                                        width: 16px;
                                    }
                                    p{
                                        margin-bottom: 0;
                                        width: 42px;
                                        text-align: left;
                                    }
                                }
                                .item: hover, .selected{
                                    background-color: #5a5a5a9c;
                                }
                                .arrow{
                                    width: 8px;
                                    height: 8px;
                                    background-color: #000;
                                    border-right: 1px solid #3a3a3a;
                                    border-bottom: 1px solid #3a3a3a;
                                    transform: rotate(45deg);
                                    margin-left: 24px;
                                    position: absolute;
                                    margin-top: 2px;
                                }
                            }
                        }
                        .sharpness: hover > .clear{
                            display: -webkit-box;
                        }
                        .fullScreen{
                            color: rgba(255,255,255,0.5);
                            line-height: 58px;
                            cursor: pointer;
                            font-size: 18px;
                        }
                        .sharpness: hover, .fullScreen: hover{
                            color: #fff;
                        }
                    }
                }
                .btn{
                    background: linear-gradient(#fefefe, #f1f1f1);
                    height: 31px;
                    border: 1px solid #c7c7c7;
                    margin-right: 10px;
                    font-size: 12px;
                    color: #333 !important;
                    .icon{
                        font-size: 17px;
                        color: #333;
                    }
                    span{
                        vertical-align: top;
                    }
                }
                .btn: hover{
                    border: 1px solid #ddd;
                }
            }
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
                    margin-top: 20px;
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
                                font-size: 12px;
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
                                    a: hover{
                                        text-decoration: underline;
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
        }
        .right{
            width: 270px;
            padding: 20px 40px 40px 30px;
            .dec, .similar{
                text-align: left;
                font-size: 12px;
                h3{
                    font-weight: bold;
                    border-bottom: 1px solid #ddd;
                    height: 25px;
                    margin-bottom: 15px;
                    font-size: 12px;
                }
                p{
                    margin-bottom: 3px;
                    color: #999;
                }
            }
            .similar{
                margin-top: 30px;
                .item{
                    display: flex;
                    width: 200px;
                    margin-top: 15px;
                    .image{
                        width: 96px !important;
                        height: 54px;
                    }
                    .msg{
                        width: 94px;
                        margin-left: 10px;
                        .top{
                            display: flex;
                            .logo{
                                margin-top: 2px;
                            }
                            a{
                                margin-left: 5px;
                                color: #333;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            }
                            a:hover{
                                text-decoration: underline;
                            }
                        }
                        p{
                            margin-bottom: 0;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                        .artists{
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            a{
                                color: #999;
                            }
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                        
                    }
                }
            }
            .common{
                margin-top: 30px;
                h3{
                    font-weight: bold;
                    border-bottom: 1px solid #ddd;
                    height: 25px;
                    margin-bottom: 15px;
                    font-size: 12px;
                    text-align: left;
                }
                .QRcode{
                    display: flex;
                    p{
                        margin: 35px 0 0 0;
                        font-size: 12px;
                        color: #999;
                        text-align: left;
                        margin-left: 15px;
                        height: 37px;
                    }
                }
            }
        }
    }
    .logo{
        color: #e13f3f;
        font-size: 12px;
        border: 1px solid #e13f3f;
        padding: 0 3px;
        height: 16px;
        line-height: 14px;
    }
`
var int
@connect('findMusic')
export default class PlayVideoView extends React.Component{
    state={
        isPlay: false, //是否播放
        rate: 0, //进度条
        clear: '', //获取最高的清晰度mv
        currentTime: '', //mv目前播放时间
        volume: 100, //音量大小
        isMuted: false, //是否静音
    }
    componentWillMount(){
        const { search } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectMvDetailByIdFun(id, data=>{
            this.setState({ 
                clear: Object.keys(data.brs)[Object.keys(data.brs).length - 1],
            })
        })
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            clearInterval(int)
            const { search } = nextProps.location
            const paramsString = search.substring(1)
            const searchParams = new URLSearchParams(paramsString)
            const id = searchParams.get('id')
            this.props.selectMvDetailByIdFun(id, data=>{
                this.setState({ 
                    clear: Object.keys(data.brs)[Object.keys(data.brs).length - 1],
                    rate: 0, 
                    currentTime: '',
                    isPlay: false
                })
            })
        }
    }
    componentWillUnmount(){
        clearInterval(int)
    }
    //播放或暂停MV
    onPlayClick = () =>{
        const { isPlay, volume, isMuted } = this.state
        if(isPlay){
            this.video.pause()
            clearInterval(int)
        }else{
            this.video.play()
            this.video.volume = isMuted ? 0 : volume/100 
            this.onVideoCurrentTime()
        }
        this.setState({ isPlay: !isPlay })
    }
    //mv当前播放时间和进度
    onVideoCurrentTime(){
        var rate = 0
        int = setInterval(()=>{
            rate = Math.floor(this.video.currentTime*100000/this.props.mvDetail.duration)
            if(rate === 100 && this.state.rate !== 100){
                clearInterval(int)
                this.setState({ isPlay: false })
            }
            this.setState({ 
                currentTime: Math.floor(this.video.currentTime)*1000,
                rate
            })
        }, 100)
    }
    //改变进度条
    onSliderChange = value =>{
        const currentTime = Math.floor(this.props.mvDetail.duration*value/100)
        this.video.currentTime = currentTime/1000
        this.setState({ rate: value, currentTime })
    }
    //改变音量大小
    onVolumeClick = value =>{
        if(this.state.isPlay){
            this.video.volume = value/100
        }
        this.setState({ volume: value })
    }
    //是否静音
    onMutedClick = () =>{
        const { isMuted, isPlay } = this.state
        isPlay ? isMuted ? this.video.volume = this.state.volume/100 : this.video.volume = 0 : ''
        this.setState({ isMuted: !this.state.isMuted })
    }
    //选择清晰度
    onClearClick = key =>{
        this.setState({ clear: key })
        this.video.autoplay='autoplay'
        this.video.volume = this.state.isMuted ? 0 : this.state.volume/100 
    }
    //全屏
    onScreenClick = () =>{
        this.video.webkitRequestFullScreen()
    }
    render(){
        const { mvDetail, similarMv } = this.props
        const { rate, isPlay, clear, currentTime, volume, isMuted } = this.state
        const clearGrade = {
            240: '标清',
            480: '高清',
            720: '超清',
            1080: '1080P'
        }
        return(
            <Root>
                {
                    JSON.stringify(mvDetail) !== '{}' ? 
                    (<div className="main">
                        <div className="left">
                            <div className="video">
                                <div className="title">
                                    <div className="logo">MV</div>
                                    <p className="name">{mvDetail.name}</p>
                                    <Link to={`/artist?id=${mvDetail.artistId}`} className="artist">{mvDetail.artistName}</Link>
                                </div>
                                <div className="media">
                                    <video src={mvDetail.brs[clear]} className="mv" ref={video=>this.video=video} onClick={this.onPlayClick}>
                                        浏览器不支持
                                    </video>
                                    <Icon type="caret-right" className="pause" style={{ display: isPlay ? 'none' : '' }} onClick={this.onPlayClick} />
                                    <div className="controls">
                                        <Icon type={isPlay ? "pause" : "caret-right"} className="play" onClick={this.onPlayClick} />
                                        <span className="time">{currentTime ? millisecond.secTotime(currentTime) : '00:00'}</span>
                                        <Slider className="rateSlider" value={rate} tooltipVisible={false} onChange={this.onSliderChange} />
                                        <span className="time">{millisecond.secTotime(mvDetail.duration)}</span>
                                        <div className="sound">
                                            <Icon type="sound" onClick={this.onMutedClick} />
                                            <div className="volume">
                                                <Slider vertical tooltipVisible={false} value={isMuted ? 0 : volume} onChange={this.onVolumeClick} />
                                                <div className="arrow"></div>
                                            </div>
                                        </div>
                                        <div className="split">|</div>
                                        <div className="sharpness">
                                            <div className="clear">
                                                <div className="arrow"></div>
                                                {
                                                    Object.keys(mvDetail.brs).map((key, i)=>(
                                                        <div className={clear === key ? "item selected" : "item"} key={i} onClick={this.onClearClick.bind(this, key)}>
                                                            <div className="checked">
                                                                {
                                                                    clear === key ? <Icon type="check" /> : ''
                                                                }
                                                            </div>
                                                            <p>{clearGrade[key]}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            {clearGrade[clear]}
                                        </div>
                                        <div className="split">|</div>
                                        <Icon type="arrows-alt" className="fullScreen" onClick={this.onScreenClick} />
                                    </div>
                                </div>
                                <Button className="btn"><Icon type="like" className="icon" /><span>{'(' + mvDetail.likeCount + ')'}</span></Button>
                                <Button className="btn"><Icon type="folder-add" className="icon" /><span>{'(' + mvDetail.subCount + ')'}</span></Button>
                                <Button className="btn"><Icon type="share-alt" className="icon" /><span>{'(' + mvDetail.shareCount + ')'}</span></Button>
                            </div>
                            <CommentView {...this.props} />
                        </div>
                        <div className="right">
                            <div className="dec">
                                <h3>MV简介</h3>
                                <p>发布时间：{mvDetail.publishTime}</p>
                                <p>播放次数：{mvDetail.playCount}次</p>
                            </div>
                            <div className="similar">
                                <h3>相关推荐</h3>
                                {
                                    similarMv.map((s, i)=>(
                                        <div className="item" key={i}>
                                            <Link to={`/mv?id=${s.id}`}><img src={s.cover} className="image" style={{ width: 96, height: 54 }} /></Link>
                                            <div className="msg">
                                                <div className="top"><div className="logo">MV</div><Tooltip placement="bottom" title={s.name}><Link to={`/mv?id=${s.id}`}>{s.name}</Link></Tooltip></div>
                                                <p>{millisecond.secTotime(s.duration)}</p>
                                                <p className="artists">
                                                    {s.artists.map((a ,i)=>(
                                                        <React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{s.artists.length === i+1 ? '' : '/'}</React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="common">
                                <h3>网易云公众号</h3>
                                <div className="QRcode">
                                    <img src="../../../public/img/QRcode.png" style={{ height: 72 }} />
                                    <p>关注我，我们才能真正拥有彼此啊~</p>
                                </div>
                            </div>
                        </div>
                    </div>) : ''
                }
            </Root>
        )
    }
}