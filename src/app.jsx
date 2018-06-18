import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'page/home/index.jsx';
import Layout from 'component/Layout/index.jsx'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
class App extends React.Component {
    render() {
      return (
        <div>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product" component={Home}/>
                <Route exact path="/product-catagory" component={Home}/>
              </Switch>
            </Layout>
          </Router>
        </div>
      );
    }
  }
  ReactDOM.render(<App/>,document.getElementById('app'))