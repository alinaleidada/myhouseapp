import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import jsondata from '../../json/City.json'
import Bscroll from 'better-scroll'
import './Address.css'
export default class Address extends Component {
      constructor(){
          super()
          this.state={
              rightlist:jsondata.allcity,
  
              bgcolor:" "
          }
      }
    render() {
       
        return (
            <div style={{height:"100%",padding:"0 20px"}}>
                <Link to='/nav'><h1 style={{color:'#9acd32'}}>选择城市</h1></Link>
                <div className="add-left" id="leftbox" style={{height:"100%",overflow:"scroll"}}>
                    <ul className="content">
                <h3>热门城市</h3>
                 {
                 jsondata.hotcity.map(obj=>{
                     return <div key={obj}>
                     <p style={{lineHeight:'40px'}}>{obj}</p></div>
                 }) 
                 }
                
                 {
                     jsondata.allcity.map(item=>{
                         return<div key={item.title} id={item.title}>
                           <h3>{item.title}</h3>
                           {
                              item.onearrcity.map(obj=>{
                                  return <p key={obj} style={{lineHeight:'40px'}}>{obj}</p>
                              })
                           }
                         </div>
                     })
                 }
                   </ul>
                  </div>
                 <div className="add-right" style={{position:"fixed",top:"200px",right:0,width:"16px"}}>
                     {
                         jsondata.allcity.map((obj,index)=>{
                             return <p 
                              key={obj.title} style={{lineHeight:"40px",textAlign:"center",backgroundColor:obj.bgcolor}} onClick={this.selectLeft.bind(this,obj.title,index)} >{obj.title}</p>
                         })
                     }
                 </div>
            </div>
        )
    }
        selectLeft(id){//通过传入id来实现右联左
            this.Leftscroll.scrollToElement(`#${id}`,400)
            let newrightlist=this.state.rightlist;
            for(let v of newrightlist){//实现选项卡效果，先将数组取出来，将里面要变化的key值取出来条件判定重新赋值后，再将这个新数组赋给state里的原来的数组
                if(v.title===id){
                  v.bgcolor="#9acd32"
                }else{
                    v.bgcolor=" "
                }
            }
            this.setState({
                rightlist:newrightlist
            })
        
        }
        componentDidMount(){
            this.Leftscroll=new Bscroll('#leftbox')
        }
}
