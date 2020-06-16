import {combineReducers} from 'redux';
import {reducer as headerReducer} from '../common/header/store';

//将小reducer组合成一起
export default combineReducers({
    header: headerReducer
})