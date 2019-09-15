
  //仓库
import {createStore,combineReducers} from 'redux' //从redux中导入创建仓库状态的方法 createStore,action发出通知触发reducer修改state状态

   function name(state="张三",action){

     switch(action.type){

         default:return state
     }
   }

   function sex(state="女",action){

        switch(action.type){

            default:return state
        }

   }

   function age(state=18,action){

    switch(action.type){
        case'changeage':return action.age
        default:return state
    }

}
 //合并reducer
   
 export default createStore(combineReducers({
                name,
                sex,
                age
         }))

//发出通知
/* store.dispatch({
    type:'changeage',
    age:20
}) */


