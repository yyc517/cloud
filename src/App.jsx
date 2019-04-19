import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import connect from '@connect'
import { hot } from 'react-hot-loader'
import Loadable from 'react-loadable'
import { Loading } from '@components'

const Login = Loadable({
  loader: () => import('@modules/index/Login'),
  loading: Loading
})
const Index = Loadable({
  loader: () => import('@modules/index/index'),
  loading: Loading
})

@connect('user')
@hot(module)
export default class App extends React.Component {
    render() {
        return (
          <Router>
            {this.props.loginStatus ? 
              <Index /> : (
                <Switch>
                  <Route path='/login' exact component={Login} />
                  <Redirect to='/login' />
                </Switch>
              )}
          </Router>
        )
    }
}
