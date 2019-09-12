import React, { Component } from 'react'

import{WingBlank,Button}from 'antd-mobile'
import'./Wechat.css'
export default class Wechat extends Component {
    render() {
        return (
            <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <WingBlank size="lg" style={{width:'80%',height:'50%',textAlign:'center'}} className='chatbox'>
                    <p><img src={require('../../../assets/images/icon-chathead.png')}/></p>
                    <p>置业顾问:<span style={{color:"rgb(154, 205, 50)",fontSize:"18px"}}>雷小妹</span></p>
                    <p>专业服务 诚信做人 诚信做事！</p>
                    <p>< Button size="small" style={{backgroundColor:'#9acd32',color:'#fff'}}>我要聊天</Button></p>
                </WingBlank>
            </div> 
        )   
    }
}
 