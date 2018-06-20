import React from 'react';

class TableList extends React.Component{
  constructor(props){
      super(props)
      this.state={
        isFirstLoading:true
      } 
  }
  componentWillReceiveProps(){
      this.setState({
        isFirstLoading:false
      })
  }
  render(){
    let tableHader=this.props.tableHeads.map(
        (tableHead,index)=>{
        if(typeof tableHead ==="object"){
            return <th key={index} width={tableHead.width}>{tableHead.name}</th>
        }else if(typeof tableHead ==="string"){
            return <th key={index}>{tableHead}</th>
            } 
        }
    )
    let listBody = this.props.children;
    let listErroe=(
        <tr>
            <td colSpan="5" className="text-center">
             {this.state.isFirstLoading?'正在加载':'没有数据'}</td>
        </tr>
    )
    let tableBody = listBody.length > 0 ? listBody : listErroe;
    return(
        <div className="row">
            <div className="col-md-12">
              <table className="table table-striped table-border">
                <thead>
                    <tr>
                        {tableHader}
                    </tr>
                </thead>
                <tbody>
                   {tableBody} 
                </tbody>
              </table>
            </div>
        </div>
    )
  }
}
export default TableList