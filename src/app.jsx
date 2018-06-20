import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'page/home/index.jsx';
import Layout from 'component/Layout/index.jsx'
import Login from 'page/login/index.jsx'
import Error from 'page/error/index.jsx'
import UserList from 'page/user/index.jsx'
import ProductRouter from 'page/product/router.jsx'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
class App extends React.Component {
    render() {
      return (
          <Router>
            <Switch>
                <Route  path="/login" component={Login}/>
                <Route  path="/" render={(props)=>(
                     <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/product" component={ProductRouter}/>
                            <Route exact path="/product-catagory" component={ProductRouter}/>
                            <Route exact path="/user/index" component={UserList}/>
                            <Redirect exact from="/user" to="/user/index"/>
                            <Route component={Error}/>
                        </Switch>
                     </Layout>
                )}/>
            </Switch>
          </Router>
      );
    }
  }
  ReactDOM.render(<App/>,document.getElementById('app'))