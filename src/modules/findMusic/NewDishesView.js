import React from 'react'
import styled from 'styled-components'
import { Icon, Tooltip } from 'antd'
import connect from '@connect';
import { Link } from 'react-router-dom'

const Root = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .main{
        width: 982px;
        margin: auto;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        background-color: #fff;
        padding: 40px;
        .new, .all{
            h1{
                text-align: left;
                font-size: 24px;
                border-bottom: 2px solid #c20c0c;
                margin-bottom: 15px;
                padding-bottom: 5px;
            }
            .albums{
                display: flex;
                flex-wrap: wrap;
                margin-left: -46px;
                .item{
                    width: 143px;
                    margin: 0 0 33px 46px;
                    position: relative;
                    .play{
                        position: absolute;
                        top: 108px;
                        right: 8px;
                        font-size: 26px;
                        color: #fff;
                        cursor: pointer;
                        background-color: #00000052;
                        border-radius: 13px;
                        display: none;
                    }
                    .play: hover{
                        background-color: #000000a6;
                        display: block;
                    }
                    img{
                        height: 143px;
                        margin-bottom: 5px;
                        border: 1px solid #b1aaaa;
                        cursor: pointer;
                    }
                    img: hover + .play{
                        display: block;
                    }
                    .name{
                        display: block;
                        color: #000;
                    }
                    .name: hover{
                        text-decoration: underline;
                    }
                    .name, p{
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        text-align: left;
                        margin-bottom: 2px;
                        font-size: 14px;
                        cursor: pointer;
                        a{
                            font-size: 12px;
                            color: #999; 
                        }
                        a: hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
`
@connect('findMusic')
export default class NewDishesView extends React.Component{
    componentWillMount(){
        this.props.loadNewSongFun()
        this.props.loadAlbumsFun()
    }
    render(){
        const { NewSong, albums } = this.props
        return(
            <Root>
                <div className="main">
                    <div className="new">
                        <h1>最新新碟</h1>
                        <div className="albums">
                        {
                            NewSong.map((s, i)=>(
                                <div className="item" key={i}>
                                    <Link to={`/album?id=${s.song.album.id}`}><img src={s.song.album.blurPicUrl} /></Link>
                                    <Tooltip placement="bottomLeft" title="播放">
                                        <Icon type="play-circle" className="play" />
                                    </Tooltip>
                                    <Link to={`/album?id=${s.song.album.id}`} className="name">{s.song.album.name}</Link>
                                    <p>
                                        {
                                            s.song.album.artists.map((a, i)=>(<React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{s.song.album.artists.length === i+1 ? '' : ' / '}</React.Fragment> ))
                                        }
                                    </p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className="all">
                        <h1>全部新碟</h1>
                        <div className="albums">
                        {
                            albums.map((s, i)=>(
                                <div className="item" key={i}>
                                    <Link to={`/album?id=${s.id}`}><img src={s.blurPicUrl} /></Link>
                                    <Icon type="play-circle" className="play" />
                                    <Link to={`/album?id=${s.id}`} className="name">{s.name}</Link>
                                    <p>
                                        {
                                            s.artists.map((a, i)=>(<React.Fragment key={i}><Link to={`/artist?id=${a.id}`}>{a.name}</Link>{s.artists.length === i+1 ? '' : ' / '}</React.Fragment> ))
                                        }
                                    </p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </Root>
        )
    }
}