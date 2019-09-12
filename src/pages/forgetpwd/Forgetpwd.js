import React, { Component } from 'react'
import { InputItem, Button, Flex, WhiteSpace, WingBlank,Toast } from 'antd-mobile'
import './Forgetpwd.css'
export default class Forgetpwd extends Component {
     constructor(){
         super()
         this.state={
            pnum:'',
            yzcode:'',
            pwd:'',
            qrpwd:''
         }
     }
    render() {
        return (
            <div>
                <WingBlank size='lg' className='forgetpwd'>
                   <h2 style={{backgroundColor:'#9acd32',color:'#fff',lineHeight:'60px',textAlign:'center'}}>忘记密码</h2>
                        {/* 手机号码 */}
                       <InputItem
                        style={{backgroundColor:'#9acd32'}}
                         value={this.state.pnum}
                         onChange={(val)=>{this.setState({pnum:val})}}
                        type="money"
                        placeholder="请输入手机号码"
                        ref={el => this.inputRef = el}
                        onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                        clear
                        disabledKeys={[]}
                    >手机号码</InputItem>
                    <InputItem
                        placeholder="请输入验证码"
                        value={this.state.yzcode}
                        onChange={(val)=>{this.setState({yzcode:val})}}
                    > 
                        验证码
                        <div className='got-authcode'><Button  style={{backgroundColor:'#9acd32',color:'#fff',width:'80px',height:'44px',fontSize:'12px',}}>获取验证码</Button></div>
                    </InputItem>
                    <InputItem
                        type="password"
                        placeholder="****"
                        value={this.state.pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                    >密码</InputItem>
                     <InputItem
                        type="password"
                        placeholder="****"
                        value={this.state.qrpwd}
                        onChange={(val)=>{this.setState({qrpwd:val})}}
                    >确认密码</InputItem>
                     <WhiteSpace size='lg'/>
                     <Button style={{backgroundColor:'#9acd32',color:'#fff'}} onClick={this.confirmresolve.bind(this)}>确认修改</Button>
                </WingBlank>
    
            </div>
        )
    }
    confirmresolve(){//确认修改
        
         if(this.state.pnum&&this.state.yzcode&&this.state.pwd&&this.state.qrpwd){
           
            this.props.history.push('/')
        }else{
            Toast.info('信息错误!!!', 1);
        }
    }
}
