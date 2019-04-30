import React from 'react'
import styled from 'styled-components'
import { Tabs } from 'antd'
import { Link, Route, Switch } from 'react-router-dom'
import connect from '@connect';
import Loadable from 'react-loadable'
import { Loading } from '@components' 

const Recommend = Loadable({
    loader: () => import('@modules/findMusic/RecommendView'),
    loading: Loading
})
const Charts = Loadable({
    loader: () => import('@modules/findMusic/ChartsView'),
    loading: Loading
})
const Songs = Loadable({
    loader: () => import('@modules/findMusic/SongsView'),
    loading: Loading
})
const RadioAnchor = Loadable({
    loader: () => import('@modules/findMusic/RadioAnchorView'),
    loading: Loading
})
const Artists = Loadable({
    loader: () => import('@modules/findMusic/ArtistsView'),
    loading: Loading
})
const NewDishes = Loadable({
    loader: () => import('@modules/findMusic/NewDishesView'),
    loading: Loading
})
const AlbumDetail = Loadable({
    loader: () => import('@modules/findMusic/AlbumDetailView'),
    loading: Loading
})
const ArtistDetail = Loadable({
    loader: () => import('@modules/findMusic/ArtistDetailView'),
    loading: Loading
})
const PlayVideo = Loadable({
    loader: () => import('@modules/findMusic/PlayVideoView'),
    loading: Loading
})
const SongDetail = Loadable({
    loader: () => import('@modules/findMusic/SongDetailView'),
    loading: Loading
})
const SongListDetail = Loadable({
    loader: () => import('@modules/findMusic/SongListDetailView'),
    loading: Loading
})
const RadioDetail = Loadable({
    loader: () => import('@modules/findMusic/RadioDetailView'),
    loading: Loading
})
const ProgramDetail = Loadable({
    loader: () => import('@modules/findMusic/ProgramDetailView'),
    loading: Loading
})
const UserDetail = Loadable({
    loader: () => import('@modules/findMusic/UserDetailView'),
    loading: Loading
})
const TabPane = Tabs.TabPane
const Root = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .line{
        width: 100%;
        height: 5px;
        background-color: #C20C0C;
    }
    .tabs{
        width: 100%;
        min-height: 10px;
        margin-top: -1px;
        text-align: center;
        &>.ant-tabs-bar{
            margin: 0;
            .ant-tabs-nav-wrap{
                background-color: #C20C0C;
                border-bottom: 1px solid #a40011;
                .ant-tabs-tab{
                    margin: 6px 30px 5px 0;
                    font-size: 13px;
                    padding: 2px 0;
                    a{
                        color: #fff;
                        padding: 3px 12px;
                        text-decoration: none;
                    }
                }
                .ant-tabs-tab-active {
                    background-color: #9B0909;
                    border-radius: 15px;
                }
                .ant-tabs-ink-bar {
                    display: none !important;
                }
            }
        }
    }
    .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated{
        transition-duration: 0s;
    }
`
@connect('findMusic')
export default class FindMusicView extends React.Component{
    state={
        activeKey: '0'
    }
    componentWillMount(){
        this.props.loading()
        this.selectActiveKey(this.props.location.pathname)
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            this.selectActiveKey(nextProps.location.pathname)
        }
    }
    selectActiveKey(pathname){
        if(pathname === '/'){
            this.setState({ activeKey: '0' })
        }else if(new RegExp('/toplist').test(pathname)){
            this.setState({ activeKey: '1' })
        }else if(new RegExp('/playlists').test(pathname)){
            this.setState({ activeKey: '2' })
        }else if(new RegExp('/djradio').test(pathname)){
            this.setState({ activeKey: '3' })
        }else if(new RegExp('/artists').test(pathname)){
            this.setState({ activeKey: '4' })
        }else if(new RegExp('/newAlbum').test(pathname)){
            this.setState({ activeKey: '5' })
        }else{
            this.setState({ activeKey: '6' })
        }
    }
    onTabsChange = (value) =>{
        this.setState({ activeKey: value })
    }
    render(){
        return(
            <Root>
                {
                    this.props.location.pathname === '/user/home' ? 
                    <div className="line" />
                    :(<Tabs className="tabs" onChange={this.onTabsChange} activeKey={this.state.activeKey}>
                        <TabPane tab={<Link to="/">推荐</Link>} key="0" />
                        <TabPane tab={<Link to="/toplist">排行版</Link>} key="1" />
                        <TabPane tab={<Link to="/playlists">歌单</Link>} key="2" />
                        <TabPane tab={<Link to="/djradio">主播电台</Link>} key="3" />
                        <TabPane tab={<Link to="/artists">歌手</Link>} key="4" />
                        <TabPane tab={<Link to="/newAlbum">新碟上架</Link>} key="5" />
                    </Tabs>)
                }
                
                <Switch>
                    <Route path="/" exact component={Recommend} />
                    <Route path="/toplist" exact component={Charts} />
                    <Route path="/playlists" exact component={Songs} />
                    <Route path="/djradio" exact component={RadioAnchor} />
                    <Route path="/artists" exact component={Artists} />
                    <Route path="/newAlbum" exact component={NewDishes} />
                    <Route path="/song" exact component={SongDetail} />
                    <Route path="/album" exact component={AlbumDetail} />
                    <Route path="/playlist" exact component={SongListDetail} />
                    <Route path="/artist" component={ArtistDetail} />
                    <Route path="/mv" exact component={PlayVideo} />
                    <Route path="/radio" exact component={RadioDetail} />
                    <Route path="/program" exact component={ProgramDetail} />
                    <Route path="/user/home" exact component={UserDetail} />
                </Switch>
            </Root>
        )
    }
}