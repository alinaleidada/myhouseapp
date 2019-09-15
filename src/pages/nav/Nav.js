import React, { Component } from 'react'
import { TabBar  } from 'antd-mobile'//按需引入ant样式
import './Nav.css'
import Main from './main/Main'
import Wechat from './wechat/Wechat'
import History from './history/History'
import My from './my/My'
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'main',
          fullScreen: true,
          itemlist:[
                  {title:'首页',key:'main',imgurl:'icon-home.png',imgselecturl:'icon-home-s.png'},
                  {title:'微聊',key:'chat',imgurl:'icon-chat.png',imgselecturl:'icon-chat-s.png'},
                  {title:'足迹',key:'history',imgurl:'icon-history.png',imgselecturl:'icon-history-s.png'},
                  {title:'我的',key:'my',imgurl:'icon-my.png',imgselecturl:'icon-my-s.png'}
                ]
        }
      }
    
      render() {
        return (
          <div style={{ position: 'fixed', height: '100%', width: '100%', top:'0'}}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#9acd32"
              barTintColor="white"
            >
               { this.state.itemlist.map(obj=>{
                  return <TabBar.Item
                  title={obj.title}
                  key={obj.key}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${require('../../assets/images/'+obj.imgurl)}) center center /  21px 21px no-repeat` }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${require('../../assets/images/'+obj.imgselecturl)}) center center /  21px 21px no-repeat` }}
                  />
                  }
                  selected={this.state.selectedTab === obj.key}
                  onPress={() => {
                    this.setState({
                      selectedTab:obj.key,
                    });
                  }}
                >
                  {this.renderContent()}
                </TabBar.Item>
               })}
                
            </TabBar>
          </div>
        );
      }
      renderContent() {//每个组件的视图出口，这个函数被tabbar每个选项调用，参数就是子组件 {pageText}就是渲染的地方,在此处使用父传子，将props传给儿子
          switch(this.state.selectedTab){
            case 'main' :return <Main sendprop={this.props.history}/>
            case 'chat' :return <Wechat sendprop={this.props.history}/>
            case 'history' :return <History sendprop={this.props.history}/>
            case 'my' :return <My sendprop={this.props.history}/>
            default:return <Main sendprop={this.props.history}/>
         }
      }
    
}
