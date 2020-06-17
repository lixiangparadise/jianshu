import * as constants from './constants'
import {fromJS} from 'immutable';//将js对象转成immutable对象

//将对象转化成immutable对象
const defaultState = fromJS({
    focused: false //鼠标点到文本框  文本框变长
});
export default (state=defaultState, action)=>{
    // if(action.type==='search_focus'){
    if(action.type===constants.SEARCH_FOCUS){
        //immutable对象的set方法会结合之前的immutable对象的值和设置的值，返回一个全新的值
        return state.set('focused', true) 
        // {
        //     focused: true
        // }
    }
    if (action.type===constants.SEARCH_BLUR){
        return state.set('focused', false)
        // {
        //     focused: false
        // }
    }
    return state;
}