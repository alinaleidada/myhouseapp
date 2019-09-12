import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { InputItem, Button, Flex, WhiteSpace, WingBlank,Toast } from 'antd-mobile'//按需引入ant样式
import './Login.css'
import {login} from '../../api/api'
export default class Login extends Component {
     constructor(){
         super()
         this.state={
             username:'',
             password:'',
             oldname:'',
             oldpwd:''
         }
     }
    render() {
        return (
            <div>
                {/* logo */}
                <Flex justify='center'>
                    <img src={require('../../assets/images/logo.jpg')} className='logo' />
                </Flex>

                {/* 登录 */}
                {/* 上下留白 */}
                <WhiteSpace size='lg'/>
                <WingBlank size='lg'>
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={this.state.username}
                        onChange={(val)=>{this.setState({username:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon-user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size='md'/>
                    <InputItem
                        placeholder="请输入密码"
                        type='password'
                        clear
                        value={this.state.password}
                        onChange={(val)=>{this.setState({password:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon-pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size='lg'/>
                    <Button style={{backgroundColor:'#9acd32',color:'#fff'}} onClick={this.LOgin.bind(this)}>登录</Button>
                    {/* 注册和忘记密码 */}
                    <WhiteSpace size='lg'/>
                    <Flex justify='between'>
                        <Link to='/reg'><span style={{color:'#9acd32'}}>手机快速注册</span></Link>
                        <Link to='/forg'><span style={{color:'#9acd32'}}>忘记密码?</span></Link>
                    </Flex>
                </WingBlank>
                  {/* 页脚，同意协议相关 */}
                  <div className='log-footer' style={{textAlign:'center',color:'#ccc'}}>登录/注册代表同意《喵喵房产用户协议》</div>
            </div>
        )
    }
   async LOgin(){//登录进行跳转及非空验证
         let{username,password,oldname,oldpwd}=this.state

          //判定,包括三种情况：当用户啥也没输入,旧值和新值都是空的，不会进入判定,进入ajax请求，如果第二次输入新值，旧值是空的，依然跳过判定，进入请求，第三次如果输入的新值跟第一次的值一样，直接打断，不再二次请求，避免服务器崩溃
          if(username===oldname&&password===oldpwd){
              return
          }
            //保存旧值
        this.setState({
            oldname:username,
            oldpwd:password
        })
           //请求
           let reqinfo=await login(username,password);
              console.log(reqinfo)
            if(reqinfo.data=='ok'){
                this.props.history.push('/nav')
            }else{
                Toast.info('信息错误!!!', 1);
            }
          

        /* login(username,password).then(res=>{
            console.log(res)
        }) */
        /* if(this.state.username!=''&&this.state.password!=''){
            console.log(this.props)
            this.props.history.push('/nav')
        }else{
            Toast.info('信息错误!!!', 1);
        } */
    }
}

