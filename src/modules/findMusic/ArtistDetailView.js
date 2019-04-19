import React from 'react'
import styled from 'styled-components'
import { Tabs, Button, Icon, Tooltip } from 'antd'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import connect from '@connect'
import Loadable from 'react-loadable'
import { Loading } from '@components' 

const PopularWorks = Loadable({
    loader: () => import('@modules/findMusic/PopularWorksView'),
    loading: Loading
})
const OwnerAlbums = Loadable({
    loader: () => import('@modules/findMusic/OwnerAlbumsView'),
    loading: Loading
})
const RelatedMv = Loadable({
    loader: () => import('@modules/findMusic/RelatedMvView'),
    loading: Loading
})
const ArtistIntroduction = Loadable({
    loader: () => import('@modules/findMusic/ArtistIntroductionView'),
    loading: Loading
})
const TabPane = Tabs.TabPane;
const Root = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .main{
        width: 982px;
        margin: auto;
        display: flex;
        background-color: #fff;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        .left{
            width: 710px;
            border-right: 1px solid #ddd;
            padding: 30px 30px 40px 40px;
            .avatar{
                position: relative;
                h1{
                    text-align: left;
                    margin-bottom: 0;
                    font-size: 24px;
                    height: 34px;
                    line-height: 24px;
                }
                .collect{
                    position: absolute;
                    z-index: 1;
                    bottom: 0;
                    width: 640px;
                    text-align: right;
                    padding: 20px;
                    background: linear-gradient(#42424200,#3a3836);
                    .ant-btn{
                        background: linear-gradient(#534f4b99,#23201da3);
                        border: 1px solid #444342;
                        color: #fff;
                        font-size: 13px;
                        padding: 0 9px;
                        margin-left: 25px;
                        .user{
                            font-size: 17px;
                            vertical-align: bottom;
                        }
                        .add{
                            font-size: 19px;
                            vertical-align: bottom;
                        }
                    }
                }
            }
            .tab{
                width: 640px;
                margin-top: -2px;
                &>.ant-tabs-bar{
                    border-bottom: none;
                    margin-bottom: 20px;
                    .ant-tabs-nav-container{
                        border-left: 1px solid #ccc;
                        border-right: 1px solid #ccc;
                        height: 40px;
                        .ant-tabs-nav-wrap{
                            .ant-tabs-nav-scroll{
                                text-align: left;
                                .ant-tabs-tab{
                                    width: 160px;
                                    text-align: center;
                                    padding: 9px 0;
                                    margin: 0;
                                    border-left: none;
                                    border-right: none;
                                    border-bottom: 1px solid #ccc;
                                    background: linear-gradient(#f6f6f6, #f9f9f9);
                                    a{
                                        color: #000 !important;
                                        padding: 8px 52px 10px;
                                        text-decoration: none;
                                    }
                                }
                                .ant-tabs-tab: first-child{
                                    border-left: none !important;
                                }
                                .ant-tabs-tab-active{
                                    background: linear-gradient(#f7f7f7, #fff);
                                    border-bottom: none;
                                    border-left: 1px solid #ccc;
                                    border-right: 1px solid #ccc;
                                }
                                .ant-tabs-ink-bar{
                                    top: 0;
                                    background-color: #d13030;
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
            h3{
                font-size: 12px;
                font-weight: bold;
                text-align: left;
                margin-bottom: 0;
                border-bottom: 1px solid #ddd;
                height: 25px;
            }
            .artist{
                display: flex;
                margin-left: -25px;
                flex-wrap: wrap;
                .item{
                    margin: 20px 0 0 25px;
                    a{
                        font-size: 12px;
                        width: 50px;
                        margin: 5px 0 0 0;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        display: block;
                        color: #333;
                        text-align: center;
                    }
                    a: hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`
@connect('findMusic')
export default class ArtistDetailView extends React.Component{
    state={
        activeKey: '1'
    }
    componentWillMount(){
        const { search, pathname } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectArtistsByIdFun(id)
        this.props.loadTopArtistsFun()
        if(new RegExp('/album').test(pathname)){
            this.setState({ activeKey: '2' })
        }else if(new RegExp('/mv').test(pathname)){
            this.setState({ activeKey: '3' })
        }else if(new RegExp('/desc').test(pathname)){
            this.setState({ activeKey: '4' })
        }
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            const { search } = nextProps.location
            const paramsString = search.substring(1)
            const searchParams = new URLSearchParams(paramsString)
            const id = searchParams.get('id')
            this.props.selectArtistsByIdFun(id)
        }
    }
    onActiveKeyChange = key =>{
        this.setState({ activeKey: key })
    }
    render(){
        const { artistDetail, HotArtists } = this.props
        return(
            <Root>
                {
                    JSON.stringify(artistDetail) !== '{}' ?
                    (<div className="main">
                        <div className="left">
                            <div className="avatar">
                                <h1>{artistDetail.artist.name}</h1>
                                <img src={`${artistDetail.artist.picUrl}?param=638y299`} style={{ border: '1px solid #ddd', borderBottom: 'none' }} />
                                <div className="collect">
                                    { artistDetail.artist.accountId && <Button><Icon type="user" className="user" /><span style={{ verticalAlign: 'text-bottom' }}>个人主页</span></Button> }
                                    <Button><Icon type="folder-add" className="add" /><span style={{ verticalAlign: 'text-bottom' }}>收藏</span></Button>
                                </div>
                            </div>
                            <Tabs className="tab" activeKey={this.state.activeKey} onChange={this.onActiveKeyChange.bind(this)}>
                                <TabPane tab={<Link to={`/artist?id=${artistDetail.artist.id}`}>热门作品</Link>} key="1"></TabPane>
                                <TabPane tab={<Link to={`/artist/album?id=${artistDetail.artist.id}`}>所有专辑</Link>} key="2"></TabPane>
                                <TabPane tab={<Link to={`/artist/mv?id=${artistDetail.artist.id}`}>相关MV</Link>} key="3"></TabPane>
                                <TabPane tab={<Link to={`/artist/desc?id=${artistDetail.artist.id}`}>艺人介绍</Link>} key="4"></TabPane>
                            </Tabs>
                            <Switch>
                                <Route path="/artist" exact component={PopularWorks} />
                                <Route path="/artist/album" exact component={OwnerAlbums} />
                                <Route path="/artist/mv" exact component={RelatedMv} />
                                <Route path="/artist/desc" exact component={ArtistIntroduction} />
                            </Switch>
                        </div>
                        <div className="right">
                            <h3>热门歌手</h3>
                            <div className="artist">
                                {
                                    HotArtists.slice(0, 6).map((a, i)=>(
                                        <div className="item" key={i}>
                                            <Link to={`artist?id=${a.id}`}><img src={a.img1v1Url} style={{ height: 50 }} /></Link>
                                            <Tooltip placement="bottomLeft" title={a.name}><Link to={`artist?id=${a.id}`}>{a.name}</Link></Tooltip>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>) : ''
                }
            </Root>
        )
    }
}