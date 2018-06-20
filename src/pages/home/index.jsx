import React from 'react';
import './index.scss'
import PageTitle from 'component/page-title/index.jsx'
import { Link } from 'react-router-dom'
import Mutil from 'util/mm.jsx';
const _mm=new Mutil();
import Statistic from 'service/home-service.jsx';
const _statistic=new Statistic();
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            userCount: '',
            productCount: '',
            orderCount: ''
        }
    }
    componentDidMount(){
        this.loadCount();
    }
    loadCount(){
        _statistic.getHomeCount().then(res=>{
            this.setState(res)
        },(errmsg)=>{
            _mm.errorTips(errmsg)
        })
    }
  render(){
    return(
      <div id="page-wrapper">
        <PageTitle title="首页123"></PageTitle>
        <div className="row">
          <div className="col-md-4">
                <Link to="/user" className="color-box brown">
                    <p className="count">{this.state.userCount}</p>
                    <p className="desc">
                        <i className="fa fa-user-o">
                            <span>用户总数</span>
                        </i>
                    </p>
                </Link>
          </div>
          <div className="col-md-4">
                <Link to="/product" className="color-box green">
                    <p className="count">{this.state.productCount}</p>
                    <p className="desc">
                        <i className="fa fa-user-o">
                            <span>商品总数</span>
                        </i>
                    </p>
                </Link>
          </div><div className="col-md-4">
                <Link to="/order" className="color-box blue">
                    <p className="count">{this.state.orderCount}</p>
                    <p className="desc">
                        <i className="fa fa-user-o">
                            <span>订单总数</span>
                        </i>
                    </p>
                </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Home