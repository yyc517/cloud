import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

const Home = () => {
    return <div>
      <h3>我是首页</h3>
    </div>
};
const About = () => {
    return <div>
      <h3>我是关于</h3>
    </div>
};
const Topics = ( {match} ) => {
    return  <Router><div>
              <h3>我是列表</h3>
              <ul>
                <li><Link to={`${match.url}/react`}>a</Link></li>
                <li><Link to={`${match.url}/router`}>b</Link></li>
                <li><Link to={`${match.url}/redux`}>c</Link></li>
              </ul>
              <hr/>
              <Route path={`${match.url}/react`} component={Topic}/>
            </div></Router>
};
const Topic = ({match}) => {
  return <div><h3>123</h3></div>
};

class App extends Component {
  render() {
    return (
        <Router>
           <div>
             <ul>
               <li><Link to="/">首页</Link></li>
               <li><Link to="/about">关于</Link></li>
               <li><Link to="/topics">列表</Link></li>
             </ul>
             <hr/>
             <Route exact={true} path="/" component={Home}  />
             <Route exact={true} path="/about" component={About} />
             <Route exact={true} path="/topics" component={Topics} />
           </div>
        </Router>
    );
  }
}
export default App