import React from 'react';
import './theme.css'
import TopNav from '../TopNav/index.jsx'
import SlideNav from '../SlideNav/index.jsx'

class Layout extends React.Component{
  constructor(props){
      super(props)
  }
  render(){
    return(
        <div id="wrapper">
            <TopNav/>
            <SlideNav/>
            {this.props.children}
        </div>
    )
  }
}
export default Layout