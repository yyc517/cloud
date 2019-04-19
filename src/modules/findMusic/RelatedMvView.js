import React from 'react'
import styled from 'styled-components'
import { Icon, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import connect from '@connect'

const Root = styled.div`
    width: 100%;
    .mvs{
        display: flex;
        flex-wrap: wrap;
        margin-left: -30px;
        .item{
            width: 137px;
            position: relative;
            margin: 0 0 30px 30px;
            img{
                width: 137px;
                height: 103px;
                margin-bottom: 5px;
                border: 1px solid #999;
            }
            .play{
                position: absolute;
                top: 34px;
                left: 52px;
                font-size: 36px;
                color: #ddd;
                cursor: pointer;
                background-color: #00000052;
                border-radius: 18px;
            }
            .play: hover{
                background-color: #000000a8;
            }
            p{
                font-size: 14px;
                text-align: left;
                margin-bottom: 0;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                a{
                    color: #000;
                }
            }
            p: hover{
                text-decoration: underline;
            }
        }
    }
`
@connect('findMusic')
export default class RelatedMvView extends React.Component{
    componentWillMount(){
        const { search } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectArtistMvsFun(id)
    }
    render(){
        const { artistMvs } = this.props
        return(
            <Root>
                <div className="mvs">
                    {
                        artistMvs.map((m, i)=>(
                            <div className="item" key={i}>
                                <Link to={`/mv?id=${m.id}`}><img src={m.imgurl} /></Link>
                                <Tooltip placement="bottomLeft" title="播放">
                                    <Link to={`/mv?id=${m.id}`}><Icon type="play-circle" className="play" /></Link>
                                </Tooltip>
                                <Tooltip placement="bottomLeft" title={m.name}>
                                    <p><Link to={`/mv?id=${m.id}`}>{m.name}</Link></p>
                                </Tooltip>
                            </div>
                        ))
                    }
                </div>
            </Root>
        )
    }
}