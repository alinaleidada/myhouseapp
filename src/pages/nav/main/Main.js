import React, { Component } from 'react'
import { InputItem, Grid, Flex, WhiteSpace, WingBlank,Toast,Carousel } from 'antd-mobile'//按需引入ant样式
import './Main.css'
import {gethouselist} from '../../../api/api'//导入请求

export default class Main extends Component {
    constructor(){
        super()
        this.state={
            data: [{imgurl:'1',href:'#/reg'},{imgurl:'2',href:'#/'},{imgurl:'3',href:'#/nav'}],
            imgHeight:'100%',
            menulist:[
                {img:'01.png',texts:'新房'},{img:'02.png',texts:'二手房'},{img:'03.jpg',texts:'租房'},{img:'04.png',texts:'商铺写字楼'},{img:'05.png',texts:'卖房'}
                ,{img:'06.png',texts:'海外房产'},{img:'07.png',texts:'小区房价'},{img:'08.jpg',texts:'问答'},{img:'09.png',texts:'嘻嘻'},{img:'10.jpg',texts:'哈哈'}
            ].map(v=>{return {icon:require('../../../assets/images/'+v.img),text:v.texts}}),
            baikelist:[{img:'icon-money.png',texts:'我要贷款'},{img:'icon-compu.png',texts:'房贷计算'},{img:'icon-konw.png',texts:'知识'},{img:'icon-sys.png',texts:'扫一扫'}].map(v=>{return{icon:require('../../../assets/images/'+v.img),text:v.texts}
                
            }),
            homelist:[]
            
        }
    }
    render() {
        return (
            <div>
                {/* 头部 */}
                <div className="main-header">
                    <span onClick={this.changeDz.bind(this,'/addr')}>成都市▽</span>
                    <div className="main-search" onClick={this.changeDz.bind(this,'/search')}>
                    <img src={require('../../../assets/images/icon-search.png')}/>
                     <span>挑好房，上喵喵房产app</span>
                    </div>
                    <img src={require('../../../assets/images/icon-position.png')} onClick={this.changeDz.bind(this,'/locat')}/>
                </div>
                 {/* 轮播 */}
                  <div style={{height:'200px'}}>
                        <Carousel
                        autoplay={true}
                        infinite
                       autoplayInterval={2000}  
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val.imgurl}
                            href={val.href}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={require(`../../../assets/images/${val.imgurl}.jpg`)}
                                alt=""
                                style={{ width: '100%', height:'100%',verticalAlign: 'top' }}
                                /* onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }} */
                            />
                        </a>
                    ))}
                </Carousel>
                </div>
                 {/* 菜单栏 */}
                 <Grid data={this.state.menulist} isCarousel hasLine={false}/>
                  {/* 房产全百科 */}
                  <div style={{padding:'10px'}}><span style={{fontSize:'18px',color:'#9acd32',marginRight:'10px'}}>房产全百科</span><span>专业的买房攻略</span></div>
                  <Grid data={this.state.baikelist} hasLine={false} />
                  <div style={{padding:'10px'}}><span style={{fontSize:'18px',color:'#9acd32',marginRight:'10px'}}>猜你喜欢</span><span>专业的买房攻略</span></div>
                  {/* 房产列表 */}
                  <ul style={{padding:'0 10px'}}>
                      {this.state.homelist.map((obj)=>{
                          return <li className='home-item' key={obj.id}>
                          <div className='homes-left'>
                              <img src={`http://127.0.0.1:80${obj.imgs}`}/>
                              <div>
                                  <h2>{obj.name}</h2>
                                  <p>{obj.area}&emsp;{obj.range}</p>
                                  <p>{obj.type}&emsp;{obj.point}平</p>
                              </div>
                          </div>
                          <span className='homes-right'>{obj.price}/平</span>
                      </li>
                      })}
                  </ul>
            </div>
        )
    }
    changeDz(newaddress){
        this.props.sendprop.push(newaddress)
    }
    async componentDidMount(){//使用await async 异步转同步，直接在异步函数执行完成后才执行下一步，解决回调地狱
        /* gethouselist().then(res=>{
            console.log(res)
        }) */
        let homeinfo=await gethouselist()
        this.setState({
            homelist:homeinfo.data
        })

    }
    componentWillUnmount(){//请求成功后销毁请求
        this.setState = (state, callback) => {
            return;
        }
    }
}
