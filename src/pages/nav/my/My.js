import React, { Component } from 'react'
import Bscroll from 'better-scroll'
//import { TabBar  } from 'antd-mobile'//按需引入ant样式
import './My.css'
export default class My extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { id: '1', imgurl: 'my-Jf.png', texts: '我的积分' }, { id: '2', imgurl: 'wifi.png', texts: '我的订阅' }, { id: '01' }, { id: '3', imgurl: 'icon-chat.png', texts: '我的积分' }, { id: '4', imgurl: 'icon-compu.png', texts: '房贷计算器' }, { id: '5', imgurl: 'my-love.png', texts: '我的房子' }, { id: '02' }, { id: '6', imgurl: 'icon-history.png', texts: '我的看房记录' },
                { id: '7', imgurl: 'icon-my.png', texts: '我的问答' }, { id: '03' }, { id: '8', imgurl: 'my-Sz.png', texts: '设置' }, { id: '9', imgurl: 'my-Jf.png', texts: '意见反馈' }
            ],
            mylogorreg: "登录/注册"
        }
    }
    render() {
        return (
            <div style={{ height: "100%" }} className="My">
                {/* 头部 */}
                <div className="my-header">
                    <div className="header-top"><img src={require('../../../assets/images/icon-chathead.png')} style={{ width: '80px', height: '80px' }} alt="" /><div className="header-middle"><p onClick={this.controlgo.bind(this)} style={{ fontSize: '18px' }}>{this.state.mylogorreg}</p><p>可与经纪人发起聊天</p></div><div style={{ padding: '30px 0' }}><img src={require('../../../assets/images/my-Sz.png')} alt="" /></div></div>
                    <ul className="XX">
                        <li>
                            <p>0</p>
                            <p className="Yhlist"><img src={require('../../../assets/images/my-money.png')} alt="" /><span>钱包</span></p>
                        </li>
                        <li>
                            <p>0</p>
                            <p className="Yhlist"><img src={require('../../../assets/images/my-Yhq.png')} alt="" /><span>优惠</span></p>

                        </li>
                        <li>
                            <p>0</p>
                            <p className="Yhlist"><img src={require('../../../assets/images/my-Sz.png')} alt="" /><span>积分</span></p>

                        </li>
                    </ul>
                </div>
                <ul className="my-infolist" style={{ height: "100%", overflow: "scroll" }} id="mybox">
                    <ul className="content">
                        {
                            this.state.data.map((obj) => {
                                if (obj.imgurl) {
                                    return <li key={obj.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', lineHeight: '70px' }}><div style={{ display: 'flex', justifyContent: 'flexStart', width: '40%', alignItems: 'center' }}><img style={{ verticalAlign: 'middle' }} src={require(`../../../assets/images/${obj.imgurl}`)} alt="" />&nbsp;<span>{obj.texts}</span></div><span>></span></li>

                                } else {
                                    return <li style={{ height: '6px', backgroundColor: '#ccc' }} key={obj.id}></li>
                                }

                            })
                        }
                    </ul>
                </ul>
            </div>
        )
    }
    controlgo() {
        console.log(111)
        if (!localStorage.getItem("username")) {//如果本地存储没有username则没有登录，这个时候才可以点击跳转
            this.props.sendprop.push('/reg')//路径跳转
        }

    }
    componentDidMount() {

        this.setState({
            mylogorreg:localStorage.getItem("username")? `${localStorage.getItem("username")}已登录`:"登录/注册"
        })
       /*  if (localStorage.getItem("username")){
            console.log(333)
            this.setState({
                mylogorreg: `${localStorage.getItem("username")}已登录`
            })
        } else {
            console.log(222)
            this.setState({
                mylogorreg: "登录/注册"
            })
        } */
        this.allscroll = new Bscroll("#mybox")
    }
}
