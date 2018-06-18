import React from 'react';

class Title extends React.Component{
    constructor(props){
       super(props)
    }
    componentWillUnmount(){
        document.title=this.props.title
    }
    render(){
        return(
               <div className="row">
                    <div className="col-md-12">
                        <h1 id="page-header">{this.props.title}</h1>
                     </div>
                </div>  
        )
    }
}
export default Title