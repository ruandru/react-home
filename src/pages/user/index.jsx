import React from 'react';
import PageTitle from 'component/page-title/index.jsx'
import { Link } from 'react-router-dom'
import Pagination from 'util/pagination/index.jsx'
import Mutil from 'util/mm.jsx';
const _mm=new Mutil();
import User from 'service/user-service.jsx';
const _user=new User();

class UserList extends React.Component{
  constructor(props){
      super(props)
      this.state={
          list:[],
          pageNum:1,
          firstLoading:true
      }
  }
  componentDidMount(){
      this.loadUserList();
  }
  loadUserList(){
      _user.getUsrList(this.state.pageNum).then((res)=>{
          this.setState(res,()=>{
              this.setState({
                firstLoading:false
              })
          })
      },(errmsg)=>{
          this.setState({
              list:[]
          })
        _mm.errorTips(errmsg)
    })
  }
  onPageNumberChange(pageNum){
     this.setState({
        pageNum:pageNum
     },()=>{
         this.loadUserList()
     }) 
  }
  render(){
    let listbody= this.state.list.map((user,index)=>{
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{new Date(user.createTime).toLocaleString()}</td>
                </tr>
            )
        })
    let listErroe=(
        <tr>
            <td colSpan="5" className="text-center">
             {this.state.firstLoading?'正在加载':'没有数据'}</td>
        </tr>
    )
    let tableBody=this.state.list.length>0?listbody:listErroe
    return(
      <div id="page-wrapper">
        <PageTitle title="用户列表"></PageTitle>
        <div className="row">
            <div className="col-md-12">
              <table className="table table-striped table-border">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>用户名</th>
                        <th>邮箱</th>
                        <th>电话</th>
                        <th>注册时间</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        tableBody
                   } 
                </tbody>
              </table>
            </div>
        </div>
        <Pagination current={this.state.pageNum} total={this.state.total} onChange={(pageNumber)=>{this.onPageNumberChange(pageNumber)}}></Pagination>
      </div>
    )
  }
}
export default UserList