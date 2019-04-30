import React from 'react'
import styled from 'styled-components'
import { millisecond } from '@utils'
import { Tooltip, Icon } from 'antd'
import { Link } from 'react-router-dom'
import connect from '@connect'

const Root = styled.div`
    width: 640px;
    .ablums{
        display: flex;
        flex-wrap: wrap;
        margin-left: -40px;
        .item{
            width: 130px;
            position: relative;
            margin: 0 0 30px 40px;
            .image > img{
                height: 130px;
                margin-bottom: 5px;
                border: 1px solid #b1aaaa;
            }
            .image: hover + .play{
                display: block;
            }
            .play{
                position: absolute;
                bottom: 56px;
                right: 10px;
                font-size: 26px;
                color: #ddd;
                cursor: pointer;
                background-color: #00000052;
                border-radius: 13px;
                display: none;
            }
            .play: hover{
                background-color: #000000a8;
                display: block;
            }
            p{
                font-size: 12px;
                text-align: left;
                margin-bottom: 2px;
            }
            .name{
                font-size: 14px;
                color: #000;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .name: hover{
                text-decoration: underline;
            }
            .date{
                color: #999;
            }
        }
    }
`
@connect('findMusic')
export default class OwnerAlbumsView extends React.Component{
    componentWillMount(){
        const { search } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectArtistAlbumFun(id)
    }
    //点击专辑播放音乐
    onAlbumPlay = id =>{
        this.props.selectAlbumByIdFun(id, songs=>{
            const list = songs.filter(s=>s.fee != '1')
            this.props.pushPlayListFun(list)
        })
    }
    render(){
        const { artistAlbum } = this.props
        return(
            <Root>
                <div className="ablums">
                    {
                        artistAlbum.map((a, i)=>(
                            <div className="item" key={i}>
                                <Link to={`/album?id=${a.id}`} className="image"><img src={a.picUrl} /></Link>
                                <Tooltip placement="bottomLeft" title="播放">
                                    <Icon type="play-circle" onClick={this.onAlbumPlay.bind(this, a.id)} className="play" />
                                </Tooltip>
                                <p className="name"><Link to={`/album?id=${a.id}`} className="name">{a.name}</Link></p>
                                <p className="date">{millisecond.transformFullDate(a.publishTime)}</p>
                            </div>
                        ))
                    }
                </div>
            </Root>
        )
    }
}