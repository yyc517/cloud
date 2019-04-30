import React from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import { Input, Button, Tabs, Icon, Menu, Dropdown, Slider, Tooltip } from 'antd'
import connect from '@connect';
import Loadable from 'react-loadable'
import { Loading } from '@components' 
import { millisecond } from '@utils'

const findMusic = Loadable({
    loader: () => import('@modules/findMusic'),
    loading: Loading
})
const myMusic = Loadable({
    loader: () => import('@modules/myMusic'),
    loading: Loading
})
const friends = Loadable({
    loader: () => import('@modules/friends'),
    loading: Loading
})
const mall = Loadable({
    loader: () => import('@modules/mall'),
    loading: Loading
})
const musician = Loadable({
    loader: () => import('@modules/musician'),
    loading: Loading
})
const TabPane = Tabs.TabPane;
const Root = styled.div`
    width: 100%;
    &>.top{
        width: 100%;
        height: 70px;
        background-color: #242424;
        .center{
            width: 1100px;
            height: 70px;
            margin: 0 auto;
            display: flex;
            .logo{
                background: url(../../../public/img/topbar.png) no-repeat;
                height: 70px;
                width: 160px;
                cursor: pointer;
                margin-right: 50px;
                display: flex;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .ant-tabs{
                width: 460px;
                height: 70px;
                float: left;
                .ant-tabs-bar{
                    border-bottom: none;
                    margin: 0;
                    height: 100%;
                    .ant-tabs-tab{
                        padding: 0;
                        height: 70px;
                        line-height: 70px;
                        margin: 0;
                        a{
                            display: block;
                            height: 70px;
                            padding: 0 22px;
                            text-decoration: none;
                            color: #ccc;
                            .anticon{
                                margin: 0;
                                position: absolute;
                                bottom: -3px;
                                left: 45%;
                                color: #C20C0C;
                            }
                        }
                    }
                    .ant-tabs-tab: hover, .ant-tabs-tab-active{
                        background-color: #000;
                        a{
                            color: #fff;
                        }
                    }
                    .ant-tabs-ink-bar{
                        height: 0;
                    }
                }
            }
            .ant-input-prefix{
                left: 30px;
                color: #969696;
            }
            .ant-input{
                width: 170px;
                margin: 20px;
                border-radius: 25px;
                font-size: 12px;
            }
            .ant-input: hover, .ant-input: focus{
                border-color: #ccc;
            }
            .btn{
                margin: 20px 20px 0 0
                border-radius: 20px;
                color: #ccc;
                border-color: #ccc;
            }
            .btn: hover{
                color: #fff;
                border-color: #fff;
            }
            .ant-dropdown-link{
                line-height: 70px;
                color: #ccc;
                text-decoration: none;
            }
            .ant-dropdown-link: hover{
                color: #fff;
            }
        }
    }
    .footer{
        border-top: 1px solid #ddd;
        height: 148px;
        background-color: #f5f5f5;
        .msg{
            width: 980px;
            margin: auto;
            p{
                font-size: 12px;
                margin-bottom: 8px;
                a{
                    color: #999;
                }
                a: hover{
                    text-decoration: underline;
                }
            }
            p: first-child{
                margin-top: 20px;
                span{
                    margin: 0 10px;
                    color: #999;
                }
            }
            p: nth-child(2), p: nth-child(3){
                span: first-child{
                    margin-right: 15px;
                }
                a{
                    color: #777;
                }
            }
        }
    }
    &>.play{
        height: 50px;
        width: 100%;
        position: fixed;
        transition: bottom 0.8s ease 0s;
        background-color: #fff;
        border-top: 1px solid #000;
        background: linear-gradient(#363636, #242323);
        box-shadow: 0 1px 6px 3px;
        .lock{
            border-top: 1px solid #000;
            position: absolute;
            border-bottom: none;
            box-shadow: 0px -3px 12px #4a4a4a;
            right: 35px;
            top: -21px;
            background: linear-gradient(#484646f5,#363636);
            width: 50px;
            height: 22px;
            color: #a29999;
            text-align: center;
            cursor: pointer;
            border-radius: 15px 15px 0 0;
            .anticon: hover{
                color: #fff;
            }
        }
        .control{
            width: 980px;
            margin: auto;
            display: flex;
            .leftIcons{
                line-height: 45px;
                .anticon{
                    font-size: 16px;
                    color: #bfbfbf;
                    border: 2px solid #bfbfbf;
                    border-radius: 14px;
                    padding: 3px;
                    cursor: pointer;
                    margin-right: 10px;
                    display: inline-block;
                    vertical-align: middle;
                }
                .anticon: nth-child(2){
                    font-size: 22px;
                    border-radius: 17px;
                    color: #fff;
                    border-color: #fff;
                    svg{
                        padding-left: 2px;
                    }
                }
                .anticon: hover{
                    color: #fff;
                    border-color: #fff;
                    box-shadow: 0 0 10px #f3f3f3;
                }
            }
            .slider{
                width: 500px;
                height: 50px;
                .song{
                    color: #999;
                    height: 28px;
                    line-height: 31px;
                    a{
                        font-size: 12px;
                        color: #999;
                    }
                    a: hover{
                        text-decoration: underline;
                    }
                    a: first-child{
                        margin-right: 10px;
                    }
                    .anticon {
                        font-size: 15px;
                        vertical-align: sub;
                        margin: 0 10px 0 -5px;
                    }
                    .anticon: hover, a: first-child{
                        color: #fff;
                    }
                }
                .ant-slider{
                    margin: 0 6px 0 0;
                    .ant-slider-rail{
                        height: 8px;
                        background-color: #191919;
                        border-radius: 6px;
                        border-bottom: 1px solid #3c3c3c;
                        border-top: 1px solid #000;
                    }
                    .ant-slider-track{
                        height: 8px;
                        background-color: #c70c0c;
                    }
                    .ant-slider-handle{
                        width: 16px;
                        height: 16px;
                        margin-top: -5px;
                        background-color: #c70c0c;
                        border: 5px solid #fff;
                    }
                    .ant-slider-handle: focus{
                        box-shadow: 0 0 10px #f3f3f3;
                    }
                }
            }
            .avatar{
                height: 34px;
                width: 34px;
                border-radius: 3px;
                border: 1px solid #000;
                margin: 9px 20px 0 10px;
                cursor: pointer;
            }
            .time{
                line-height: 63px;
                height: 50px;
                color: #999;
                margin-left: 10px;
            }
            .split{
                line-height: 46px;
                font-size: 22px;
                color: #1d1d1d;
                margin: 0 5px;
            }
            .sound{
                margin: 0 7px 0 8px;
                position: relative;
                .anticon{
                    color: #ccc;
                    font-size: 20px;
                    line-height: 56px;
                    cursor: pointer;
                }
                .volume{
                    position: absolute;
                    bottom: 56px;
                    height: 113px;
                    width: 34px;
                    background-color: #000000c9;
                    margin-left: -6px;
                    padding-top: 7px;
                    border: 1px solid #000;
                    border: 1px solid #000;
                    z-index: 1;
                    .ant-slider{
                        height: 85%;
                        .ant-slider-rail{
                            background-color: #000;
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
                }
            }
            .modeIcon{
                color: #ccc;
                font-size: 22px;
                cursor: pointer;
                line-height: 55px;
            }
            .modeIcon: hover{
                color: #fff;
            }
            .playIcon{
                display: flex;
                cursor: pointer;
                height: 20px;
                margin: 15px 0 0 7px;
                .anticon{
                    color: #bfbfbf;
                    font-size: 20px;
                }
                p{
                    margin: 1px 0 0 -1px;
                    height: 18px;
                    border-radius: 0 9px 9px 0;
                    background-color: #1f1e1e;
                    width: 35px;
                    color: #666;
                    line-height: 16px;
                    text-align: center;
                    border: 1px solid #3a3a3a;
                    padding-right: 3px;
                    font-size: 12px;
                }
            }
            .playIcon: hover{
                .anticon{
                    color: #fff;
                }
            }
            .playList{
                position: absolute;
                bottom: 50px;
                height: 301px;
                background-color: #141414;
                border-radius: 5px 5px 0 0;
                .left{
                    width: 553px;
                    .header{
                        display: flex;
                        justify-content: space-between;
                        padding: 10px 25px;
                        border-right: 1px solid #3a3a3a;
                        h4{
                            color: #e2e2e2;
                            margin-bottom: 0;
                            font-size: 14px;
                        }
                        .action{
                            display: flex;
                            .item{
                                color: #ccc;
                                font-size: 12px;
                                .anticon{
                                    font-size: 17px;
                                    margin-right: 5px;
                                    vertical-align: bottom;
                                }
                                cursor: pointer;
                            }
                            .item: hover{
                                color: #fff;
                                span{
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                    .list{
                        height: 260px;
                        margin-bottom: 0;
                        padding: 0;
                        background-color: #2b2b2bfc;
                        border-top: 1px solid #353333;
                        border-right: 1px solid #3a3a3a;
                        overflow-y: scroll;
                        .song{
                            display: flex;
                            color: #ccc;
                            height: 28px;
                            line-height: 28px;
                            cursor: pointer;
                            .play{
                                width: 25px;
                                padding-left: 10px;
                            }
                            .name{
                                width: 275px;
                                padding-left: 10px;
                                font-size: 12px;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            }
                            .btns{
                                width: 108px;
                                padding-left: 10px;
                                .showIcon{
                                    margin-right: 6px;
                                    font-size: 17px;
                                    cursor: pointer;
                                    color: #ccc;
                                    vertical-align: text-bottom;
                                }
                                .showIcon: hover{
                                    color: #fff;
                                }
                            }
                            .artist{
                                width: 75px;
                                padding-left: 10px;
                                font-size: 12px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                a{
                                    color: #ccc;
                                }
                                a: hover{
                                    text-decoration: underline;
                                }
                            }
                            .duration{
                                width: 70px;
                                padding-left: 10px;
                                font-size: 12px;
                            }
                        }
                        .selected{
                            background-color: #141414;
                            color: #fff;
                        }
                    }
                }
                .right{
                    width: 420px;
                    .title{
                        text-align: center;
                        color: #fff;
                        height: 41px;
                        line-height: 41px;
                        .anticon{
                            color: #ccc;
                            float: right;
                            cursor: pointer;
                            margin: 15px 15px 0 0;
                        }
                        .anticon: hover{
                            color: #fff;
                        }
                    }
                    .lyrics{
                        border-top: 1px solid #353333;
                        height: 260px;
                        background-color: #2a2a2a;
                        text-align: center;
                        color: #989898;
                        overflow-y: scroll;
                        font-size: 12px;
                        padding-top: 30px;
                        #active{
                            color: #fff;
                            font-size: 14px;
                            transition: font-size 0.2s linear;
                        }
                    }
                }
            }
            .rightIcons{
                line-height: 55px;
                height: 50px;
                margin-left: 30px;
                .anticon{
                    color: #ccc;
                    font-size: 19px;
                    margin-right: 8px;
                    cursor: pointer;
                }
                .anticon: hover{
                    color: #fff;
                }
            }
        }
        .lyrics::-webkit-scrollbar, .list::-webkit-scrollbar{
            width: 6px;
        }
        .lyrics::-webkit-scrollbar-thumb, .list::-webkit-scrollbar-thumb{
            border-radius: 10px;
            -webkit-box-shadow: 0 0 5px #545354;
            background: #545354; 
        }
        .lyrics::-webkit-scrollbar-track, .list::-webkit-scrollbar-track{
            background: #1f1e1f;
        }
    } 
`
var int
@connect('user', 'findMusic')
export default class Index extends React.Component{
    state={
        item: [
            {
                key: '0',
                path: '/',
                exact: true,
                name: '发现音乐',
                comp: findMusic
            },{
                key: '1',
                path: '/my',
                exact: false,
                name: '我的音乐',
                comp: myMusic
            },{
                key: '2',
                path: '/friend',
                exact: false,
                name: '朋友',
                comp: friends
            },{
                key: '3',
                path: '/store',
                exact: false,
                name: '商城',
                comp: mall
            },{
                key: '4',
                path: '/musician',
                exact: false,
                name: '音乐人',
                comp: musician
            }
        ],
        activeKey: '0',
        bottom: 0,
        isLock: true, //是否锁定音乐蓝
        isPlay: false, //播放或暂停音乐
        rate: 0, //音乐进度条
        currentTime: '', //目前音乐播放时间
        key: '',
        isShow: false, //是否展示音乐栏
        hoverIndex: '',
        mode: 'cycle', //列表音乐播放模式循环(cycle)、随机(random)、单曲(single),
        songs: [], //列表歌曲
        volume: 30, //音量大小,
        isVolume: false, //是否暂时音量栏
    }
    componentWillMount(){
        window.addEventListener('hashchange', () => {
            const { hash } = window.location
            if(new RegExp('#/mv').test(hash)){
                if(this.state.isPlay){
                    this.audio.pause()
                    clearInterval(int)
                }
            }
            if(new RegExp('/my').test(hash)){
                this.setState({ activeKey: '1' })
            }else if(new RegExp('/friend').test(hash)){
                this.setState({ activeKey: '2' })
            }else if(new RegExp('/store').test(hash)){
                this.setState({ activeKey: '3' })
            }else if(new RegExp('/musician').test(hash)){
                this.setState({ activeKey: '4' })
            }else if(new RegExp('/user/home').test(hash)){
                this.setState({ activeKey: '5' })
            }else {
                this.setState({ activeKey: '0' })
            }
        })
    }
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
    //锁定或解锁音乐栏
    onLockClick = () =>{
        this.setState({ isLock: !this.state.isLock })
    }
    //上一首歌
    preSong = () =>{
        var ind
        this.props.playSongs.map((s,i)=>{
            s.id === this.props.playingSong.id ? ind = i : ''
        })
        let index = ind === 0 ? this.props.playSongs.length - 1 : ind - 1
        this.props.selectSongUrlByIdFun(this.props.playSongs[index] && this.props.playSongs[index].id)
        this.props.preOrNextSongFun(this.props.playSongs[index])
    }
    //下一首歌
    nextSong = () =>{
        var ind
        this.props.playSongs.map((s,i)=>{
            s.id === this.props.playingSong.id ? ind = i : ''
        })
        let index = ind === this.props.playSongs.length - 1 ? 0 : ind + 1
        this.props.selectSongUrlByIdFun(this.props.playSongs[index] && this.props.playSongs[index].id)
        this.props.preOrNextSongFun(this.props.playSongs[index])
    }
    //随机播放音乐
    randomMusic = () =>{
        const { playingSong, playSongs } = this.props
        const { songs } = this.state
        const NewSongs = songs.filter(s=>s.id !== playingSong.id).length === 0 ? playSongs : songs.filter(s=>s.id !== playingSong.id)
        this.setState({ songs: NewSongs })
        let ind = Math.floor(NewSongs.length*Math.random())
        this.props.selectSongUrlByIdFun(NewSongs[ind].id)
    }
    //暂停、播放歌曲
    onPlayClick = () =>{
        this.setState({ isPlay: !this.state.isPlay })
        if(this.props.songUrl.length == 0){
            return
        }
        if(this.state.isPlay){
            this.audio.pause()
            clearInterval(int)
        }else{
            this.audio.play()
            this.onMusicCurrentTime()
        }
    }
    //当前歌曲播放的时间和进度
    onMusicCurrentTime = () =>{
        var rate = 0
        int = setInterval(()=>{
            this.lyricsActive()
            rate = Math.floor(this.audio.currentTime*100000/this.props.playingSong.dt)
            if(rate === 100 && this.state.rate !== 100){
                clearInterval(int)
                this.setState({ isPlay: false })
                if(this.state.mode === 'cycle'){ //循环播放
                    this.nextSong()
                }else if(this.state.mode === 'random'){ //随机播放
                    this.randomMusic()
                }
            }
            this.setState({ 
                currentTime: Math.floor(this.audio.currentTime)*1000,
                rate
            })
        }, 100)
    }
    //拖拽音乐进度条
    onSilderChange = value =>{
        if(JSON.stringify(this.props.playingSong) !== '{}'){
            const current = Math.floor(this.props.playingSong.dt * value / 100)
            this.audio.currentTime = current/1000
            this.setState({ currentTime: current })
        }
        this.setState({ rate: value })
    }
    //改变音量大小
    onVolumeChange = value =>{
        if(this.props.songUrl.length > 0){
            this.audio.volume = value/100
        }
        this.setState({ volume: value })
    }
    componentWillUpdate(nextProps){
        if(this.props.songUrl !== nextProps.songUrl){
            this.setState({ isPlay: true, currentTime: '' })
            this.onMusicCurrentTime()
        }
        else if(this.props.playSongs !== nextProps.playSongs){
            this.setState({ songs: nextProps.playSongs })
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.songUrl !== prevProps.songUrl){
            this.audio.volume = this.state.volume/100
        }
    }
    mouseEnter = (index) =>{
        this.setState({ hoverIndex: index })
    }
    mouseLeave = () =>{
        this.setState({ hoverIndex: '' })
    }
    //当前歌曲播放的时间对应的歌词
    transformMill = (str1, str2) =>{
        const arr1 = str1.split(":")
        const mil1 = Math.round((parseInt(arr1[0]*60) + parseFloat(arr1[1]))*100)/100
        if(!str2 && this.audio.currentTime >= mil1){
            return true
        }else if(str2){
            const arr2 = str2 && str2.split(":")
            const mil2 = Math.round((parseInt(arr2[0]*60) + parseFloat(arr2[1]))*100)/100
            if(this.audio.currentTime > mil1 && this.audio.currentTime < mil2){
                return true
            }
            return false
        }
    }
    //歌词自动滚动
    lyricsActive(){
        const atc = document.getElementById("active")
        const lyr = document.getElementById("lyrics")
        lyr.scrollTop = atc && atc.offsetTop - 150
    }
    //单个移除播放列表的歌曲
    onRemoveSong = (id, e) =>{
        e.stopPropagation()
        this.props.removeSongFun(id)
    }
    //播放类型改变(随机、循环、单曲)
    onModeChange = () =>{
        const { mode } = this.state
        mode === 'cycle' ? this.setState({ mode: 'random' }) : mode === 'random' ? this.setState({ mode: 'single' }) : this.setState({ mode: 'cycle' })
    }
    //播放列表中选择歌曲
    selectListSong = s =>{
        if(s.id === this.props.playingSong.id){
            this.setState({ rate: 0, currentTime: '' })
            this.audio.currentTime = 0
            this.audio.play()
        }else{
            this.props.playListPlayFun(s)
        }
    }
    render(){
        const { item, activeKey, bottom, isLock, isPlay, rate, currentTime, mode, volume, isVolume } = this.state
        const { songUrl, playingSong, playSongs, lyrics } = this.props
        const menu = (
            <Menu style={{ marginTop: '6px' }}>
              <Menu.Item>
                <a target="_blank"><Icon type="mobile" />手机登录</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank"><Icon type="wechat" />微信登录</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank"><Icon type="qq" />QQ登录</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank"><Icon type="weibo" />新浪微博登录</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank"><Icon type="mail" />网易邮箱账号登录</a>
              </Menu.Item>
            </Menu>
        );
        const { hash } = window.location
        return(
            <Router>
                <Root id="root">
                    <div className='top'>
                        <div className='center'>
                            <div className='logo'>
                                <Link to={item[0].path} />
                            </div>
                            <Tabs
                                onChange={this.onChange}
                                activeKey={activeKey}
                            >
                                {item.map((i,index) => (<TabPane tab={<Link to={i.path}>{i.name}<Icon style={{ display: activeKey == index && !new RegExp('#/user/home').test(window.location.hash) ? 'block' : 'none' }} type="caret-up" /></Link>} key={i.key} />))}
                            </Tabs>
                            <div>
                                <Input placeholder='音乐/视频/电台/用户' prefix={<Icon type="search" />} />
                            </div>
                            <Button className='btn' ghost>创作者中心</Button>
                            <Dropdown overlay={menu} overlayClassName="dropdown" placement='bottomCenter'>
                                <a className="ant-dropdown-link" href="#">登录 <Icon type="caret-down" /></a>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='content'>
                        <Switch>
                            {item.map(i=>(
                                <Route key={i.key} path={i.path} component={i.comp} />
                            ))}
                            <Redirect to="/" />
                        </Switch>
                    </div>
                    <div className="footer">
                        <div className="msg">
                            <p>
                                <a href="magnet:">关于网易</a><span>|</span>
                                <a>客服服务</a><span>|</span>
                                <a>服务条款</a><span>|</span>
                                <a>网站导航</a><span>|</span>
                                <a>意见反馈</a>
                            </p>
                            <p>
                                <span>网易公司版权所有©1997-2019</span>
                                <span>杭州乐读科技有限公司运营：</span>
                                <a>浙网文[2018]3506-263号</a>
                            </p>
                            <p>
                                <span>违法和不良信息举报电话：0571-89853516</span>
                                <span>举报邮箱：</span>
                                <a>ncm5990@163.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="play" style={{ bottom: bottom, display: new RegExp('#/mv').test(hash) ? 'none' : '' }}
                        onMouseEnter={()=>{this.setState({ bottom: 0 })}}
                        onMouseLeave={()=>{!isLock && this.setState({ bottom: -50 })}}>
                        <div className="lock">
                            <Icon onClick={this.onLockClick} type={isLock ? 'lock' : 'unlock'} />
                        </div>
                        <div className="control">
                            <div className="leftIcons">
                                <Icon type="step-backward" onClick={this.preSong} />
                                <Icon type={isPlay ? "pause" : "caret-right"} onClick={this.onPlayClick} />
                                <Icon type="step-forward" onClick={this.nextSong} />
                            </div>
                            {songUrl && songUrl.length > 0 && 
                            <audio src={songUrl[0].url} autoPlay="autoplay" ref={audio=>this.audio=audio} loop={mode==='single' || playSongs.length === 1 ? 'loop' : ''}>
                                Your browser does not support the audio element.
                            </audio>}
                            {
                                JSON.stringify(playingSong) !== '{}' ?
                                    playingSong.djId == 0 ?
                                        (<Link to={`/song?id=${playingSong.id}`}>
                                            <img src={playingSong.al.picUrl} className="avatar" />
                                        </Link>)
                                        :(<Link to={`/program?rid=${playingSong.ar[0].id}&id=${playingSong.id}`}>
                                            <img src={playingSong.pic} className="avatar" />
                                        </Link>)
                                    :(<img src="http://s4.music.126.net/style/web2/img/default/default_album.jpg" className="avatar" />)   
                            }
                            
                            <div className="slider">
                                <div className="song">
                                    {
                                        JSON.stringify(playingSong) !== '{}' ?
                                        (<React.Fragment>
                                            {
                                                playingSong.djId == 0 ?
                                                <Link to={`/song?id=${playingSong.id}`}>{playingSong.name}</Link>
                                                :<Link to={`/program?rid=${playingSong.ar[0].id}&id=${playingSong.id}`}>{playingSong.name + '[电台节目]'}</Link>
                                            }
                                            
                                            {
                                                JSON.stringify(playingSong) !== '{}' && playingSong.mv ? 
                                                <Link to={`/mv?id=${playingSong.mv}`}><Icon type="video-camera" /></Link> : ''
                                            }
                                            {
                                                playingSong.djId == 0 ?
                                                playingSong.ar.map((a, i)=>(
                                                    <React.Fragment key={i}>
                                                        <Link to={`/artist?id=${a.id}`}>{a.name}</Link>{playingSong.ar.length === i+1 ? '' : '/'}
                                                    </React.Fragment>
                                                ))
                                                : <Link to={`radio?id=${playingSong.ar[0].id}`}>{playingSong.ar[0].name}</Link>
                                            }
                                        </React.Fragment>) : ''
                                    }
                                </div>
                                <Slider value={rate} tooltipVisible={false} onChange={this.onSilderChange} />
                            </div>
                            <div className="time">
                                <span>{currentTime ? millisecond.secTotime(currentTime) : '00:00'}</span>
                                <span>/{JSON.stringify(playingSong) !== '{}' ? millisecond.secTotime(playingSong.dt) : '00:00'}</span>
                            </div>
                            <div className="rightIcons">
                                <Tooltip placement="top" title="收藏" arrowPointAtCenter={true}>
                                    <Icon type="folder-add" />
                                </Tooltip>
                                <Tooltip placement="top" title="分享" arrowPointAtCenter={true}>
                                    <Icon type="share-alt" />
                                </Tooltip>
                            </div>
                            <div className="split">|</div>
                            <div className="sound">
                                <Icon type="sound" onClick={()=>{this.setState({ isVolume: !isVolume })}} />
                                <div className="volume" style={{ display: isVolume ? '' : 'none' }}>
                                    <Slider value={volume} vertical tooltipVisible={false} onChange={this.onVolumeChange} />
                                </div>
                            </div>
                            <Tooltip placement="right" title={mode === 'cycle' ? "循环" : mode === 'random' ? "随机" : "单曲"} arrowPointAtCenter={true}>
                                <Icon type={mode === 'cycle' ? "retweet" : mode === 'random' ? "swap" : "redo" } className="modeIcon" onClick={this.onModeChange} />
                            </Tooltip>
                            <div className="playIcon" onClick={()=>{this.setState({ isShow: !this.state.isShow })}}>
                                <Icon type="menu-unfold" /><p>{playSongs.length}</p>
                            </div>
                            <div className="playList" style={{display: this.state.isShow ? 'flex' : 'none'}}>
                                <div className="left">
                                    <div className="header">
                                        <h4>播放列表({playSongs.length})</h4>
                                        <div className="action">
                                            <div className="item">
                                                <Icon type="folder-add" />
                                                <span>收藏全部</span>
                                            </div>
                                            <div style={{ color: '#3a3a3a', margin: '0 8px' }}>|</div>
                                            <div className="item" onClick={()=>{this.props.removeSongFun()}}>
                                                <Icon type="delete" />
                                                <span>清除</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list">
                                        {
                                            playSongs.map((s, i)=>(
                                                <li className={this.state.hoverIndex === i || s.id === playingSong.id ? "song selected" :"song"} key={i} onMouseEnter={this.mouseEnter.bind(this, i)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.selectListSong.bind(this, s)}>
                                                    <div className="play">
                                                        <Icon type="caret-right" style={{ color: '#b80a0a', fontSize: 17, verticalAlign: 'text-bottom', display: s.id === playingSong.id ? '' : 'none' }} />
                                                    </div>
                                                    <div className="name">{s.name}</div>
                                                    <div className="btns">
                                                        {
                                                            this.state.hoverIndex === i ? 
                                                                (<React.Fragment>
                                                                    <Tooltip placement="bottomLeft" title="收藏" arrowPointAtCenter={true}>
                                                                        <Icon type="folder-add" className="showIcon" />
                                                                    </Tooltip>
                                                                    <Tooltip placement="bottomLeft" title="分享" arrowPointAtCenter={true}>
                                                                        <Icon type="share-alt" className="showIcon" />
                                                                    </Tooltip>
                                                                    <Tooltip placement="bottomLeft" title="下载" arrowPointAtCenter={true}>
                                                                        <Icon type="download" className="showIcon" />
                                                                    </Tooltip>
                                                                    <Tooltip placement="bottomLeft" title="删除" arrowPointAtCenter={true}>
                                                                        <Icon type="delete" className="showIcon" onClick={this.onRemoveSong.bind(this, s.id)} />
                                                                    </Tooltip>
                                                                </React.Fragment>) : ''
                                                        }
                                                    </div>
                                                    <div className="artist">{s.ar.map((a, i)=>(
                                                        <React.Fragment key={i}>
                                                            <Link onClick={e=>e.stopPropagation()} to={`/${s.djId == 0 ? 'artist' : 'radio'}?id=${a.id}`}>{a.name}</Link>{s.ar.length === i+1 ? '' : '/'}
                                                        </React.Fragment>
                                                    ))}</div>
                                                    <div className="duration">{millisecond.secTotime(s.dt)}</div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="right">
                                    <div className="title">
                                        {this.props.songUrl.length > 0 && JSON.stringify(playingSong) !== '{}' ? playingSong.name : ''}
                                        <Icon type="close" onClick={()=>{this.setState({ isShow: false })}} />
                                    </div>
                                    <div className="lyrics" id="lyrics">
                                        {
                                            this.props.songUrl.length > 0 && JSON.stringify(playingSong) !== '{}' ? 
                                            JSON.stringify(lyrics) !== '{}' ? lyrics.lyric ? lyrics.lyric.split('\n').map((e, i)=>(
                                                e && <p key={i} id={this.transformMill(e.split(']')[0].split('[')[1], lyrics.lyric.split('\n')[i+1].split(']')[0].split('[')[1]) ? 'active' : ''}>
                                                        {e.split(']')[1]}
                                                    </p>
                                            )) : <p>暂无歌词</p>
                                            : <p>纯音乐,无歌词</p>
                                            : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Root>
            </Router>
        )
    }
}