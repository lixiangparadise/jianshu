// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store';
//使用redux-immutable可以将headerReducer变为immutable对象
//将小reducer组合成一起
export default combineReducers({
    header: headerReducer
})