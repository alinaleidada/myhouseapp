import React, { Component } from 'react'
import { InputItem, Button, Checkbox, WhiteSpace, WingBlank,Toast } from 'antd-mobile'//按需引入ant样式
import './Register.css'
import {reigster,codeinfo} from'../../api/api'
const CheckboxItem = Checkbox.CheckboxItem;
export default class Register extends Component {
        constructor(){
            super()
            this.state={
            username:'',
            pnum:'',
            yzcode:'',
            password:'',
            checked:false
            }
        }
    render() {
        return (
            <div>
                 <WingBlank size='lg' className='forgetpassword'>
                   <h2 style={{backgroundColor:'#9acd32',color:'#fff',lineHeight:'60px',textAlign:'center'}}>注册</h2>
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
                        <div className='got-authcode'><Button  style={{backgroundColor:'#9acd32',color:'#fff',width:'80px',height:'44px',fontSize:'12px',}} onClick={this.gotcode.bind(this)}>获取验证码</Button></div>
                    </InputItem>
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={this.state.username}
                        onChange={(val)=>{this.setState({username:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon-user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        type="password"
                        placeholder="****"
                        value={this.state.password}
                        onChange={(val)=>{this.setState({password:val})}}
                    >密码</InputItem>
                      <CheckboxItem  value={this.state.checked} onChange={(val) =>{this.setState({checked:val})} }>
                          我已同意<span style={{color:'#9acd32'}}>《用户服务协议》及《隐私权政策》</span>
                        </CheckboxItem>
                        <WhiteSpace size='lg'/>
                     <Button style={{backgroundColor:'#9acd32',color:'#fff'}} onClick={this.Reg.bind(this)}>注册</Button>
                </WingBlank>
            </div>
        )
    }

     async gotcode(){

        let gotcodeinfo= await codeinfo()
        this.setState({
            yzcode:gotcodeinfo.data
        })
         
     }
    async Reg(){

         //(this.state.pnum&&this.state.yzcode&&this.state.password&&this.state.checked)? this.props.history.push('/'):Toast.info('信息错误!!!', 1);
         let {pnum,yzcode,checked,username,password,}=this.state;//解构
         if(pnum&&yzcode&&password&&checked&&username){

            let reginfo=await reigster(username,password);
            console.log(reginfo.data)
            if(reginfo.data=='ok'){
                this.props.history.push('/')
            }else{
                Toast.info('信息错误!!!', 1)
            }
         }else{Toast.info('信息错误!!!', 1)}
         
       
        
    }
}
