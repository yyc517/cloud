import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const SpinContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`

const Loading = ({ delay = 200 }) => (
  <SpinContainer>
    <Spin delay={delay} />
  </SpinContainer>
)

Loading.create = delay => Component => (
  class extends Component {
    static displayName = `Loading(${Component.displayName || Component.name || 'unknown'})`
    state = {
      loading: true,
      ...this.state
    }
    setLoading = bool => this.setState({
      loading: bool
    })
    render() {
      return this.state.loading ? (
        <Loading delay={delay}></Loading>
      ) : (
        super.render()
      )
    }
  }
)

export default Loading
