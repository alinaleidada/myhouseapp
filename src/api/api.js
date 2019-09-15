
import axios from 'axios'
import qs from 'qs'

export const ip='http://127.0.0.1:80'//保存ip地址，便于后续维护

//获取用户登录的数据 acc:用户名  pwd:密码
export function login(username,password){
    return axios.post(ip + '/login.php',qs.stringify({acc:username,pwd:password}))
}

//获取猜你喜欢的数据
export function gethouselist(){

    return axios.get(ip + '/gethouselist.php')
}

//用户注册请求
export function reigster(username,password){

    return axios.post(ip+'/reg.php',qs.stringify({acc:username,pwd:password}))

}

//获取验证码接口
export function codeinfo(){

    return axios.get(ip+'/valitecode.php')
    
}