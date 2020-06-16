import * as constants from './constants'
const defaultState = {
    focused: false //鼠标点到文本框  文本框变长
};
export default (state=defaultState, action)=>{
    // if(action.type==='search_focus'){
    if(action.type===constants.SEARCH_FOCUS){
        return {
            focused: true
        }
    }
    if (action.type===constants.SEARCH_BLUR){
        return {
            focused: false
        }
    }
    return state;
}