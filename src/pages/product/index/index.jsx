import React from 'react';
import PageTitle from 'component/page-title/index.jsx'
import { Link } from 'react-router-dom'
import Pagination from 'util/pagination/index.jsx'
import TabList from 'util/table-list/index.jsx'
import Mutil from 'util/mm.jsx';
const _mm=new Mutil();
import User from 'service/product-service.jsx';
const _product=new User();
import './index.scss'
import Search from './index-list-serarch.jsx'

class ProductList extends React.Component{
  constructor(props){
      super(props)
      this.state={
          list:[],
          pageNum:1,
          listType:'list'
      }
  }
  componentDidMount(){
      this.loadProductrList();
  }
  loadProductrList(){
      let listParam={};
      listParam.listType=this.setState.listType;
      listParam.pageNum=this.state.pageNum;
      //如果是搜索的话，需要传入类型和搜索关键字
      if(this.setState.listType==="serach"){
          listParam.searchType-this.state.searchType;
          listParam.searchKeyword=this.state.searchKeyword;
      }
    _product.getProduct(listParam).then((res)=>{
          this.setState(res)
      },(errmsg)=>{
          this.setState({
              list:[]
          })
        _mm.errorTips(errmsg)
    })
  }
  onSearch(searchType,searchKeyword){
    let listType = searchKeyword===''?'list':'serarch';
    this.setState({
        listType:listType,
        pageNum:1,
        searchType:searchType,
        searchKeyword:searchKeyword
    },()=>{
        this.loadProductrList()
    })
  }
  onPageNumberChange(pageNum){
     this.setState({
        pageNum:pageNum
     },()=>{
         this.loadProductrList()
     }) 
  }
  onSetProductStatus(e,productId,currentStatus){
    let newStatus=currentStatus==1?2:1,
        confirmTips=currentStatus==1?'确定要下架该商品':'确定要商家改商品'
    if(window.confirm(confirmTips)){
        _product.setProductStatus(
            {
                productId:productId,
                status:newStatus
            }
        ).then((res)=>{
            _mm.successTips(res)
            this.loadProductrList();
        },(errmsg)=>{
            _mm.errorTips(res)
        })
    }
  }
  render(){
    let tableHeads=[{
        name:'商品ID',
        width:'10%'
    },{
        name:'商品信息',
        width:'50%'
    },{
        name:'价格',
        width:'10%'
    },{
        name:'状态',
        width:'15%'
    },{
        name:'操作',
        width:'15%' 
    }];
    return(
      <div id="page-wrapper">
        <PageTitle title="商品列表"></PageTitle>
        <div className="row search-wrap">
            <Search onSearch={(searchType,searchKeyword)=>{
                this.onSearch(searchType,searchKeyword)
            }}/>
        </div>
        <TabList tableHeads={tableHeads}>
            {
                this.state.list.map((product,index)=>{
                    return (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>
                                <p>{product.name}</p>
                                <p>{product.subtitle}</p>
                            </td>
                            <td>￥{product.price}</td>
                            <td>
                                {
                                    <div>
                                        <p>{product.status==1? '在售':'已下架'}</p>
                                        <button className="btn btn-warning btn-xs" onClick={(e)=>{this.onSetProductStatus(e,product.id,product.status)}}>{product.status==1? '下架':'上家'}</button>
                                    </div>  
                                }
                            </td>
                            <td>
                                <Link className="opear" to={`/product/detail/${product.id}`}>详情</Link>
                                <Link className="opear" to={`/product/save/${product.id}`}>编辑</Link>
                            </td>
                        </tr>
                    )
                })
            }
        </TabList>
        <Pagination current={this.state.pageNum} total={this.state.total} onChange={(pageNumber)=>{this.onPageNumberChange(pageNumber)}}></Pagination>
      </div>
    )
  }
}
export default ProductList