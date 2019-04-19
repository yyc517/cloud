import React from 'react'
import styled from 'styled-components'
import connect from '@connect';

const Root = styled.div`
    width: 100%;
    .decs{
        margin-top: 10px;
        .item{
            margin-bottom: 30px;
            h3{
                text-align: left;
                font-size: 14px;
                font-weight: bold;
                height: 17px;
                line-height: 17px;
                margin-bottom: 10px;
            }
            .intro{
                border-left: 3px solid #c10d0c;
                padding-left: 10px;
            }
            p{
                font-size: 12px;
                text-align: left;
                line-height: 25px;
                margin-bottom: 0;
            }
        }
    }
`
@connect('findMusic')
export default class ArtistIntroductionView extends React.Component{
    componentWillMount(){
        const { search } = this.props.location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const id = searchParams.get('id')
        this.props.selectArtistdescFun(id)
    }
    render(){
        const { artistDesc, artistDetail } = this.props
        return(
            <Root>
                {
                    JSON.stringify(artistDesc) !== '{}' ?
                    (<div className="decs">
                        <div className="item">
                            <h3 className="intro">{artistDetail.artist.name}简介</h3>
                            <p>{artistDesc.briefDesc}</p>
                        </div>
                        {
                            artistDesc.introduction.map((t, i)=>(
                                <div className="item" key={i}>
                                    <h3>{t.ti}</h3>
                                    {
                                        t.txt.split('\n').map((e, i)=>(
                                            e && <p key={i}>{e}</p>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>) : ''
                }
                
            </Root>
        )
    }
}