import React from 'react';
import './index.css'
import PageTitle from 'component/page-title/index.jsx'
class Home extends React.Component{
  render(){
    return(
      <div id="page-wrapper">
        <PageTitle title="首页123"></PageTitle>
        <div className="row">
          <div className="col-md-12">
            bodu
          </div>
        </div>
      </div>
    )
  }
}
export default Home