const defaultState = {
    focused: false //鼠标点到文本框  文本框变长
};
export default (state=defaultState, action)=>{
    if(action.type==='search_focus'){
        return {
            focused: true
        }
    }
    else if (action.type==='search_blur'){
        return {
            focused: false
        }
    }
    return state;
}