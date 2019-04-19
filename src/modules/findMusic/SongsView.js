import React from 'react'
import styled from 'styled-components'
import { Popover, Button, Radio, Icon, Tooltip  } from 'antd'
import CatListView from './CatListView'
import connect from '@connect';
import { millisecond } from '@utils'
import { Link } from 'react-router-dom'

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
        padding: 40px;
        .header{
            display: flex;
            justify-content: space-between;
            height: 40px;
            border-bottom: 2px solid #c20c0c;
            .left{
                display: flex;
                .ant-btn{
                    background: -webkit-linear-gradient(#fff, #f1f1f1);
                    color: #0c73c2; 
                    font-size: 12px;
                }
                .ant-btn: hover, .ant-btn:focus{
                    background: #fff;
                    color: #0c73c2; 
                    border-color: #ddd; 
                }
                .ant-popover-open{
                    border-color: #ddd; 
                }
                
            }
            .right{
                .ant-radio-button-wrapper{
                    height: 29px;
                    line-height: 26px;
                    box-shadow: none !important;
                    color: #666;
                    font-size: 12px;
                    padding: 0;
                    width: 46px;
                    text-align: center;
                    a{
                        text-decoration: none;
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .ant-radio-button-wrapper-checked{
                    background: -webkit-linear-gradient(#d20c0d, #a80909);
                    border-color: #a80909;
                    a{
                        color: #fff;
                    }
                }
            }
        }
        .content{
            display: flex;
            flex-wrap: wrap;
            margin: 30px 0 0 -50px;
            .item{
                width: 140px;
                margin: 0 0 30px 50px;
                .bottom{
                    margin-top: -27px;
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
                        font-size: 16px;
                        cursor: pointer;
                    }
                    .play: hover{
                        color: #fff;
                    }
                }
                .name, .creator{
                    margin-bottom: 0;
                    text-align: left;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .name{
                    font-size: 14px;
                    margin-top: 8px;
                    a{
                        color: #000;
                    }
                }
                .name: hover{
                    text-decoration: underline;
                }
                .creator{
                    font-size: 12px;
                    a{
                        color: #666
                    }
                    a: hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
    .ant-popover{
        .allBtn{
            background: -webkit-linear-gradient(#fff, #f1f1f1);
            color: #0c73c2; 
            font-size: 12px;
        }
    }
`
@connect('findMusic')
export default class SongsView extends React.Component{
    componentWillMount(){
        const { search } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const order = searchParams.get('order')
        const cat = searchParams.get('cat')
        this.props.selectPlaylistFun(cat, order)
        this.props.loadPlayListCatListFun()
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            const { search } = nextProps.location
            const paramsString = search.substring(1)
            const searchParams = new URLSearchParams(paramsString)
            const order = searchParams.get('order')
            const cat = searchParams.get('cat')
            this.props.selectPlaylistFun(cat, order)
        }
    }
    render(){
        const text=<a style={{ fontSize: 12, backgroundColor: '#fdfdfd', border: '1px solid #ddd', borderRadius: 3, padding: '4px 14px', color: '#000' }}>全部风格</a>
        const content=<CatListView {...this.props}/>
        const { playList } = this.props
        const searchParams = new URLSearchParams(this.props.location.search.substring(1))
        const order = searchParams.get('order')
        const cat = searchParams.get('cat')
        return(
            <Root>
                {
                    JSON.stringify(playList) !== '{}' ? 
                    (<div className="main">
                        <div className="header">
                            <div className="left">
                                <h2 style={{ fontSize: '24px', marginRight: '8px', lineHeight: '28px' }}>{cat}</h2>
                                <Popover placement="bottomRight" title={text} content={content} trigger="click">
                                    <Button>选择分类<Icon type="down" style={{ verticalAlign: 'middle', marginLeft: '3px' }} /></Button>
                                </Popover>
                            </div>
                            <div className="right">
                                <Radio.Group value={order || 'hot'} buttonStyle="solid">
                                    <Radio.Button value="hot"><Link to={`/playlists?${cat ? 'cat=' + cat + '&order=hot' : 'order=hot'}`}>热门</Link></Radio.Button>
                                    <Radio.Button value="new"><Link to={`/playlists?${cat ? 'cat=' + cat + '&order=new' : 'order=new'}`}>最新</Link></Radio.Button>
                                </Radio.Group>
                            </div>
                        </div>
                        <div className="content">
                            {
                                playList.playlists.map((p, i)=>(
                                    <div key={i} className="item">
                                        <Link to={`playlist?id=${p.id}`}><img src={p.coverImgUrl} style={{ width: 140, cursor: 'pointer' }} /></Link>
                                        <div className="bottom">
                                            <div className="playCount"><Icon type="customer-service" theme="filled" style={{ marginRight: '5px', fontSize: 14 }} />{millisecond.transformCount(p.playCount)}</div>
                                            <Icon type="play-circle" className="play" />
                                        </div>
                                        <Tooltip placement="bottomLeft" title={p.name} overlayStyle={{ fontSize: 12, whiteSpace: 'nowrap' }}>
                                            <p className="name"><Link to={`playlist?id=${p.id}`}>{p.name}</Link></p>
                                        </Tooltip>
                                        <p className="creator"><span style={{ color: '#999' }}>by </span><a>{p.creator.nickname}</a></p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>) : ''
                }
                
            </Root>
        )
    }
}