import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

const Root = styled.div`
    width: 100%;
    height: 100%;
    .item{
        display: flex;
        .category{
            border-right: 1px solid #ddd;
            min-width: 100px;
            max-width: 100px;
            padding: 15px 0 0 30px;
            .icon{
                font-size: 20px;
                color: #999;
                margin-right: 5px;
                vertical-align: bottom;
            }
            .labal{
                font-weight: bold;
            }
        }
        .sub{
            width: 570px;
            padding: 15px 15px 0 15px;
            line-height: 25px;
            display: flex;
            flex-wrap: wrap;
            .type{
                a{
                    font-size: 12px;
                    color: #333;
                }
                a: hover{
                    text-decoration: underline;
                }
                span{
                    margin: 0 8px 0 10px;
                    color: #d8d8d8;
                }
            }
            .selected{
                background-color: #ddd;
                
            }
        }
    }
    .item: last-child > .sub{
        padding-bottom: 25px;
    }
`
export default class CatListView extends React.Component{
    render(){
        const { categories, sub } = this.props.catList
        const icons = {0:'global', 1:'project', 2: 'coffee', 3: 'smile', 4: 'rocket'}
        const searchParams = new URLSearchParams(this.props.location.search.substring(1))
        const order = searchParams.get('order')
        const cat = searchParams.get('cat')
        return(
            <Root>
                {
                    Object.keys(categories).map((key, i)=>(
                        <div key={i} className="item">
                            <div className="category">
                                <Icon type={icons[i]} className="icon" />
                                <span className="labal">{categories[key]}</span>
                            </div>
                            <div className="sub">
                                {
                                    sub.map((s, i)=>(
                                        s.category == key && (
                                            <div className="type" key={i}>
                                                <Link to={`/playlists?cat=${s.name}${order ? '&order=' + order : ''}`} style={cat === s.name ? {backgroundColor: '#ddd', color: '#fff', padding: '1px 6px'} : {}}>{s.name}</Link>
                                                <span>|</span>
                                            </div>
                                        )
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </Root>
        )
    }
}