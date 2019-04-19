import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import { Carousel, Icon } from 'antd'
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
        padding: 40px;
        background-color: #fff;
        position: relative;
        .header{
            margin-left: -33px;
           .page{
                display: flex !important;
                flex-wrap: wrap;
                .item{
                    width: 70px;
                    height: 72px;
                    text-align: center;
                    margin: 0 0 25px 33px;
                    font-size: 12px;
                    cursor: pointer;
                    border-radius: 5px;
                    color: #999;
                    .image{
                        width: 48px;
                        overflow: hidden;
                        margin-left: 12px;
                    }
                }
                .item: hover{
                    background-color: #f1f1f1;
                }
           } 
            .ant-carousel .slick-dots{
                bottom: 10px;
                li{
                    margin-left: 15px;
                    button{
                        width: 6px;
                        height: 6px;
                        border-radius: 5px;
                        background-color: #000;
                    }
                    button: hover{
                        background-color: #C20C0C;
                    }
                }
               .slick-active button{
                    background-color: #C20C0C;
               }
            } 
            .icon{
                font-size: 23px;
                position: absolute;
                color: #ddd;
                cursor: pointer;
            }
            .icon: hover{
                color: #666;
            }
            .left{
                left: 10px;
                top: 125px;
            }
            .right{
                right: 10px;
                top: 125px;
            }
        }
        .recommend{
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            .programs, .djRadios{
                h1{
                    border-bottom: 2px solid #c20c0c;
                    margin-bottom: 0;
                    padding-bottom: 5px;
                }
                width: 424px;
                text-align: left
                .list{
                    padding: 0;
                    list-style: none;
                    margin-bottom: 0;
                    .item{
                        display: flex;
                        padding: 10px 0;
                        border-left: 1px solid #ddd;
                        border-right: 1px solid #ddd;
                        .info{
                            font-size: 12px;
                            margin-left: 10px;
                            width: 254px;
                            p{
                                color: #999;
                                margin-bottom: 0;
                                cursor: pointer;
                            }
                            p: hover{
                                text-decoration: underline;
                            }
                            a{
                                color: #000;
                                display: block;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                            }
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                        .category{
                            height: 18px;
                            border: 1px solid #999;
                            line-height: 17px;
                            font-size: 12px;
                            padding: 0 6px;
                            margin: 11px 0 0 5px;
                            cursor: pointer;
                        }
                        .category: hover{
                            color: #666;
                            border: 1px solid #666;
                        }
                        .text{
                            font-size: 12px;
                            width: 100%;
                            text-align: right;
                            line-height: 65px;
                            height: 20px;
                        }
                    }
                    .item: nth-child(odd){
                        background-color: #fff;
                    }
                    .item: nth-child(even){
                        background-color: #f7f7f7;
                    }
                    .item: last-child{
                        border-bottom: 1px solid #ddd;
                    }
                    .item: hover{
                        background-color: #eee;
                    }
                }
            }
        }
        .radios{
            h3{
                text-align: left;
                font-size: 24px;
                border-bottom: 2px solid #c20c0c;
                height: 45px;
                margin-bottom: 0
            }
            .list{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .item{
                    display: flex;
                    width: 435px;
                    padding: 20px 0;
                    border-bottom: 1px solid #ddd;
                    .dec{
                        margin-left: 20px;
                        text-align: left;
                        a{
                            font-size: 18px;
                            font-weight: bold;
                            color: #333;
                            margin: 16px 0 20px;
                            display: block;
                        }
                        a: hover{
                            text-decoration: underline;
                        }
                        p{
                            font-size: 12px;
                            color: #999;
                        }
                    }
                }
            }
        }
    }
`
@connect('findMusic')
export default class RadioAnchorView extends React.Component{
    componentWillMount(){
        this.getSearch(this.props.location.search)
        this.props.loadCateListFun()
    }
    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            this.getSearch(nextProps.location.search)
        }
    }
    getSearch(search){
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        if(id){
            this.props.findRecommendDjByIdFun(id)
        }else{
            this.props.loadRecommendProgramFun()
            this.props.loadRecommendDjFun()
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
    render(){
        const { cateList, programs, djRadios, selectedRadios } = this.props
        const id = new URLSearchParams(this.props.location.search.substring(1)).get('id')
        return(
            <Root>
                <div className="main">
                    <div className="header">
                        <Carousel effect="fade" ref={carousel=>this.carousel=carousel}>
                            <div className="page">
                                {
                                    cateList.slice(0,18).map((s, i)=>(
                                        <Link to={`${this.props.match.url}?id=${s.id}`} className="item" key={i} style={{ border: id == s.id ? '2px solid #d35757' : '' }}>
                                            <div className="image"><img src={s.picWebUrl} style={{ marginLeft: id == s.id ? -52 : 0 }} /></div>
                                            <p style={{ color: id == s.id ? '#d35757' : '' }}>{s.name}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                            <div className="page">
                                {
                                    cateList.slice(18,20).map((s, i)=>(
                                        <Link to={`${this.props.match.url}?id=${s.id}`} className="item" key={i} style={{ border: id == s.id ? '2px solid #d35757' : '' }}>
                                            <div className="image"><img src={s.picWebUrl} style={{ marginLeft: id == s.id ? -52 : 0 }} /></div>
                                            <p style={{ color: id == s.id ? '#d35757' : '' }}>{s.name}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </Carousel>
                        <Icon className="icon left" type="left" onClick={this.onPrev.bind(this)} />
                        <Icon className="icon right" type="right" onClick={this.onNext.bind(this)} />
                    </div>
                    {
                        id && selectedRadios.length > 0 ?
                        (<div className="radios">
                            <h3>{selectedRadios[0].category}<span style={{ fontFamily: 'simsun' }}>·</span>电台</h3>
                            <div className="list">
                                {
                                    selectedRadios.map((s, i)=>(
                                        <div className="item" key={i}>
                                            <Link to={`/radio?id=${s.id}`}><img src={s.picUrl} style={{ height: 120 }} /></Link>
                                            <div className="dec" key={i}>
                                                <Link to={`/radio?id=${s.id}`}>{s.name}</Link>
                                                <p>{s.rcmdtext}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>)
                        :(<div className="recommend">
                            <div className="programs">
                                <h1>推荐节目</h1>
                                <ul className="list">
                                    {
                                        programs.map((p, i)=>(
                                            <li className="item" key={i}>
                                                <img src={p.blurCoverUrl} style={{ height: 40, marginLeft: 20, cursor: 'pointer' }} />
                                                <div className="info">
                                                    <p>{p.name}</p>
                                                    <p>{p.dj.brand}</p>
                                                </div>
                                                <div className="category">{p.radio.category}</div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="djRadios">
                                <h1>推荐电台</h1>
                                <ul className="list">
                                    {
                                        djRadios.slice(0, programs.length).map((p, i)=>(
                                            <li className="item" key={i}>
                                                <Link to={`/radio?id=${p.id}`}><img src={p.picUrl} style={{ height: 40, marginLeft: 20 }} /></Link>
                                                <div className="info">
                                                    <Link to={`/radio?id=${p.id}`}>{p.name}</Link>
                                                    <p>{p.dj.nickname}</p>
                                                </div>
                                                <div className="category">{p.category}</div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>)
                    }
                </div>
            </Root>
        )
    }
}