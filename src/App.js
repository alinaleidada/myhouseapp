import React, { Component } from 'react'
import{HashRouter,Route,Switch} from 'react-router-dom'
/* HashRouter（容器,路由出口组件）Route(根据path匹配hash，加载对应的组件到容器中) exact（精准匹配）switch(多路线选择器，只要匹配成功一个Route,就会返回,性能高,还可以设置default加载的页面)*/
import Log from './pages/login/Login'
import Reg from './pages/register/Register'
import Nav from './pages/nav/Nav'
import Forgetpwd from './pages/forgetpwd/Forgetpwd'
import Addr from './pages/address/Address'
import Search from './pages/search/Search'
import Locat from './pages/locations/Locations'
import Error from './pages/error/Error'//当用户输入不对的hash时，跳转到默认页面
import store from './store'
import {Provider}from 'react-redux'//Provider用来分享store里的状态给子组件
 
export default class App extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>
                <Provider store={store}>
                    <HashRouter>
                        <Switch>
                            <Route path='/' exact component={Log} ></Route>
                            <Route path='/reg'  component={Reg} ></Route>
                            <Route path='/nav'  component={Nav} ></Route>
                            <Route path='/forg' component={Forgetpwd}></Route>
                            <Route path='/addr' component={Addr}></Route>
                            <Route path='/search' component={Search}></Route>
                            <Route path='/locat' component={Locat}></Route>
                            <Route component={Error}></Route>
                            {/*  <Route component={Log}></Route> */}
                        </Switch>
                    </HashRouter>
               </Provider>
            </div>
        )
    }
}
