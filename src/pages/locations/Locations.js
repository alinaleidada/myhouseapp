import React, { Component } from 'react'

export default class Locations extends Component {
    constructor(){
        super()
        this.state={
            address:"获取中..."
        }
    }

    render() {
        return (
            <div id="container" style={{width:'100%',height:'100%'}}> 
               <h3>{this.state.address}</h3> 
            </div>
        )
    }
    componentDidMount(){//绘制地图
          
        //保存this
        let _this=this
        var map = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                   // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    //地图显示当前城市
                    _this.setState({
                        address: cityinfo
                    })
                    map.setBounds(citybounds);
                }
            } else {
                console.log(result.info);
            }
        });
    }
}
