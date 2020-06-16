import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// 创建store且传入reducer
// const store = createStore(reducer);
//使用中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    // applyMiddleware(...middleware)
));


export default store;