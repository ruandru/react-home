import React from 'react';
import PageTitle from 'component/page-title/index.jsx'
import { Link } from 'react-router-dom'

class Error extends React.Component{
    constructor(){
        super();
    }

  render(){
    return(
      <div id="page-wrapper">
        <PageTitle title="错误404"></PageTitle>
        <div className="row">
            <div className="col-md-12">
                <span>找不到该路径,</span>
                <Link to="/">点我返回</Link>
            </div>
        </div>
      </div>
    )
  }
}
export default Error