import React from 'react'
import styled from 'styled-components'
import connect from '@connect';
import { Avatar, Tooltip } from 'antd'
import { Link } from 'react-router-dom'

const Root = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .main{
        width: 982px;
        height: 100%;
        margin: auto;
        display: flex;
        .left{
            width: 180px;
            padding: 51px 10px 0 10px;
            background-color: #f9f9f9;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            .category{
                h3{
                    text-align: left;
                    font-weight: bold;
                    margin: 0 0 0 14px;
                }
                .list{
                    list-style: none;
                    padding: 0;
                    .item{
                        text-align: left;
                        display: flex;
                        height: 29px;
                        margin-bottom: 2px;
                        color: #333;
                        .point{
                            width: 4px;
                            height: 4px;
                            background-color:#999;
                            margin: 13px 0 0 13px;
                        }
                        .name{
                            margin-left: 15px;
                            font-size: 12px;
                            line-height: 26px;
                        }
                    }
                    .selected{
                        border: 1px solid #ddd;
                        border-radius: 3px;
                        background: linear-gradient(#fff, #f7f7f7);
                        color: #c20c0c;
                        .point{
                            background-color: #c20c0c;
                        }
                        .name{
                            text-decoration: none !important;
                        }  
                    }
                    .item: hover{
                        .name{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
        .right{
            width: 799px;
            height: 100%;
            background-color: #fff;
            border-right: 1px solid #ddd;
            padding: 40px;
            .enter, .hot, .cate{
                .title{
                    height: 40px;
                    border-bottom: 2px solid #c20c0c;
                    display: flex;
                    justify-content: space-between;
                    h1{
                        font-size: 24px;
                    }
                    .more{
                        line-height: 42px;
                        font-size: 12px;
                        color: #666;
                    }
                    .more: hover{
                        text-decoration: underline;
                    }
                }
                .initial{
                    padding: 0;
                    list-style: none;
                    display: flex;
                    justify-content: space-around;
                    margin: 25px 0;
                    .label{
                        padding: 1px 6px;
                        border-radius: 2px;
                        cursor: pointer;
                        font-size: 14px;
                        color: #000;
                    }
                    .label: hover{
                        text-decoration: underline;
                    }
                    .choose{
                        color: #fff;
                        background-color: #c20c0c;
                    }
                }
                .artists{
                    display: flex;
                    flex-wrap: wrap;
                    margin: 20px 0 0 -17px;
                    .artist{
                        margin: 0 0 30px 17px;
                        .dec{
                            display: flex;
                            justify-content: space-between;
                            margin-top: 6px;
                            height: 17px;
                            a{
                                font-size: 12px;
                                color: #000;
                            }
                            a: hover{
                                text-decoration: underline;
                            }
                        }
                    }
                }
                .artistsName{
                    display: flex;
                    list-style: none;
                    padding: 0;
                    flex-wrap: wrap;
                    margin-bottom: 0;
                    .item{
                        width: 143px;
                        height: 30px;
                        padding-left: 17px;
                        text-align: left;
                        a{
                            font-size: 12px;
                            color: #000;
                            margin-right: 3px;
                        }
                        a:hover{
                            text-decoration: underline;
                        }
                    }
                }
                .ant-avatar{
                    background-color: rgb(220, 47, 47);
                    width: 16px;
                    height: 16px;
                    font-size: 12px !important;
                    line-height: 15px;
                    cursor: pointer;
                    border: .1px solid #555;
                }
            }
        }
    }
`
@connect('findMusic')
export default class ArtistsView extends React.Component{
    componentWillMount(){
        this.getSearch(this.props.location.search)
        this.props.loadTopArtistsFun()
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
        const initial = searchParams.get('initial')
        if(id){
            this.props.selectArtistByCodeFun(id, initial || '')
        }else{
            this.props.selectArtistByCodeFun('5001', initial || '')
        }
    }
    render(){
        const categories = [{
            label: '推荐',
            list: [{
                name: '推荐歌手',
                code: ''
            },{
                name: '入驻歌手',
                code: '5001'
            }]
        },{
            label: '华语',
            list: [{
                name: '华语男歌手',
                code: '1001'
            },{
                name: '华语女歌手',
                code: '1002'
            },{
                name: '华语组合/乐队',
                code: '1003'
            }]
        },{
            label: '欧美',
            list: [{
                name: '欧美男歌手',
                code: '2001'
            },{
                name: '欧美女歌手',
                code: '2002'
            },{
                name: '欧美组合/乐队',
                code: '2003'
            }]
        },{
            label: '日本',
            list: [{
                name: '日本男歌手',
                code: '6001'
            },{
                name: '日本女歌手',
                code: '6002'
            },{
                name: '日本组合/乐队',
                code: '6003'
            }]
        },{
            label: '韩国',
            list: [{
                name: '韩国男歌手',
                code: '7001'
            },{
                name: '韩国女歌手',
                code: '7002'
            },{
                name: '韩国组合/乐队',
                code: '7003'
            }]
        },{
            label: '其他',
            list: [{
                name: '其他男歌手',
                code: '4001'
            },{
                name: '其他女歌手',
                code: '4002'
            },{
                name: '其他组合/乐队',
                code: '4003'
            }]
        }]
        const initials = [{
            label: '热门', value: ''
        },{
            label: 'A', value: 'a'
        },{
            label: 'B', value: 'b'
        },{
            label: 'C', value: 'c'
        },{
            label: 'D', value: 'd'
        },{
            label: 'E', value: 'e'
        },{
            label: 'F', value: 'f'
        },{
            label: 'G', value: 'g'
        },{
            label: 'H', value: 'h'
        },{
            label: 'I', value: 'i'
        },{
            label: 'J', value: 'j'
        },{
            label: 'K', value: 'k'
        },{
            label: 'L', value: 'l'
        },{
            label: 'M', value: 'm'
        },{
            label: 'N', value: 'n'
        },{
            label: 'O', value: 'o'
        },{
            label: 'P', value: 'p'
        },{
            label: 'Q', value: 'q'
        },{
            label: 'R', value: 'r'
        },{
            label: 'S', value: 's'
        },{
            label: 'T', value: 't'
        },{
            label: 'U', value: 'u'
        },{
            label: 'V', value: 'v'
        },{
            label: 'W', value: 'w'
        },{
            label: 'X', value: 'x'
        },{
            label: 'Y', value: 'y'
        },{
            label: 'Z', value: 'z'
        }]
        const { artists, HotArtists } = this.props
        const searchParams = new URLSearchParams(this.props.location.search.substring(1))
        const id = searchParams.get('id')
        const initial = searchParams.get('initial')
        var name = ''
        categories.map(c=>c.list.map(l=>l.code == id ? name = l.name : ''))
        return(
            <Root>
                <div className="main">
                    <div className="left">
                        {
                            categories.map((c, i)=>(
                                <div className="category" key={i}>
                                    <h3>{c. label}</h3>
                                    <ul className="list">
                                        {
                                            c.list.map((e, i)=>(
                                                <Link to={`/artists${e.code ? '?id=' + e.code : ''}`} key={i} className={!id && !e.code ? "item selected" : id == e.code ? "item selected" : "item"}>
                                                    <div className="point"></div><div className="name">{e.name}</div>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="right">
                        {
                            !id ? (<React.Fragment>
                                <div className="enter">
                                    <div className="title">
                                        <h1>入驻歌手</h1>
                                        <Link to={`/artists?id=5001`} className="more">更多></Link>
                                    </div>
                                    <div className="artists">
                                        {
                                            artists.slice(0, 10).map((a, i)=>(
                                                <div className="artist" key={i}>
                                                    <Link to={`/artist?id=${a.id}`}><img src={a.img1v1Url} style={{ width: 130 }} /></Link>
                                                    <div className="dec">
                                                        <Link to={`/artist?id=${a.id}`}>{a.name}</Link>
                                                        {
                                                            a.accountId && (<Tooltip placement="bottom" title={a.name + '的个人主页'}>
                                                                <Link to={`/user/home?id=${a.accountId}`}><Avatar icon="user" style={{ backgroundColor:  '#dc2f2f', fontSize: 17}} /></Link>
                                                            </Tooltip>)
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="hot">
                                    <div className="title">
                                        <h1>热门歌手</h1>
                                    </div>
                                    <div className="artists">
                                        {
                                            HotArtists.slice(0, 10).map((a, i)=>(
                                                <div className="artist" key={i}>
                                                    <Link to={`/artist?id=${a.id}`}><img src={a.img1v1Url} style={{ width: 130 }} /></Link>
                                                    <div className="dec">
                                                        <Link to={`/artist?id=${a.id}`}>{a.name}</Link>
                                                        {
                                                            a.accountId && (<Tooltip placement="bottom" title={a.name + '的个人主页'}>
                                                                <Avatar icon="user" style={{ backgroundColor:  '#dc2f2f', fontSize: 17}} />
                                                            </Tooltip>)
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <hr style={{ border: '.5px dotted #999', borderLeft: 'none', borderRight: 'none' }} />
                                    <ul className="artistsName">
                                        {
                                            HotArtists.slice(10).map((h, i)=>(
                                                <li key={i} className="item">
                                                    <Link to={`/artist?id=${h.id}`}>{h.name}</Link>
                                                    {
                                                        h.accountId && (<Tooltip placement="bottom" title={h.name + '的个人主页'}>
                                                            <Avatar icon="user" style={{ backgroundColor:  '#dc2f2f', fontSize: 17}} />
                                                        </Tooltip>)
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </React.Fragment>)
                            : id === '5001' ? (<div className="enter">
                                <div className="title">
                                    <h1>入驻歌手</h1>
                                </div>
                                <div className="artists">
                                    {
                                        artists.map((a, i)=>(
                                            <div className="artist" key={i}>
                                                <Link to={`/artist?id=${a.id}`}><img src={a.img1v1Url} style={{ width: 130 }} /></Link>
                                                <div className="dec">
                                                    <Link to={`/artist?id=${a.id}`}>{a.name}</Link>
                                                    {
                                                        a.accountId && (<Tooltip placement="bottom" title={a.name + '的个人主页'}>
                                                            <Avatar icon="user" style={{ backgroundColor:  '#dc2f2f', fontSize: 17}} />
                                                        </Tooltip>)
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>)
                            : (<div className="cate">
                                <div className="title">
                                    <h1>{name}</h1>
                                </div>
                                <ul className="initial">
                                    {
                                        initials.map((e, i)=>(
                                            <Link to={`${this.props.location.pathname}?id=${id}&initial=${e.value}`} key={i} className={!initial && !e.value ? "label choose" : initial == e.value ? "label choose" : "label"}>
                                                {e.label}
                                            </Link>
                                        ))
                                    }
                                </ul>
                                <div className="artists">
                                    {
                                        artists.map((a, i)=>(
                                            <div className="artist" key={i}>
                                                <Link to={`/artist?id=${a.id}`}><img src={a.img1v1Url} style={{ width: 130 }} /></Link>
                                                <div className="dec">
                                                    <Link to={`/artist?id=${a.id}`}>{a.name}</Link>
                                                    {
                                                        a.accountId && (<Tooltip placement="bottom" title={a.name + '的个人主页'}>
                                                            <Avatar icon="user" style={{ backgroundColor:  '#dc2f2f', fontSize: 17}} />
                                                        </Tooltip>)
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </Root>
        )
    }
}