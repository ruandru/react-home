import React from 'react';
// import PageTitle from 'component/page-title/index.jsx'
// import { Link } from 'react-router-dom'
// import Pagination from 'util/pagination/index.jsx'
// import TabList from 'util/table-list/index.jsx'
// import Mutil from 'util/mm.jsx';
// const _mm=new Mutil();
// import User from 'service/product-service.jsx';
// const _product=new User();
import './index.scss'

class Search extends React.Component{
    constructor(){
        super();
        this.state={
            searchType:'procuctId',
            searchKeyword:''
        }
    }
    onValueChange(e){
        let name=e.target.name,
            value=e.target.value.trim();
        this.setState({
            [name]:value
        })
    }
    onSearch(){
       this.props.onSearch(this.state.searchType,this.state.searchKeyword)
    }
    onSearchKeywordKeyUp(e){
        if(e.keyCode===13)this.onSearch()
    }
    render(){
        return(
            <div className="col-md-12">
                <div className="form-inline">
                    <div className="form-group">
                        <select className="form-control" name="searchType" onChange={(e)=>{
                            this.onValueChange(e)
                        }}>
                            <option value="procuctId">按商品ID查询</option>
                            <option value="procuctName">按商品名称查询</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="searchKeyword" placeholder="关键词"
                        onChange={(e)=>{this.onValueChange(e)}} onKeyUp={(e)=>this.onSearchKeywordKeyUp(e)}/>
                    </div>
                    <button  className="btn btn-primary" onClick={(e)=>{this.onSearch(e)}}>搜索</button>
                </div>
            </div>
        )
    }
}
export default Search