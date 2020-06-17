import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import { HeaderWrapper, Logo, 
  Nav, NavItem, SearchInfo, NavSearch, 
  Addition, Button, SearchWrapper } from './style';
import {connect} from 'react-redux';
// import * as actionCreators from './store/actionCreator';
import {actionCreators} from './store'

class Header extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   focused: false //鼠标点到文本框  文本框变长
    // }
  }
  // handleInputFocus = ()=>{
  //   // this.setState({focused: true})
  // }
  // handleInputBlur = ()=>{
  //   // this.setState({focused: false})
  // }
  render(){
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            {/* 设置动画 */}
            <CSSTransition
              in={this.props.focused}
							timeout={200}
							classNames="slide">
              <NavSearch 
                className={this.props.focused ? 'focused':''}
                onFocus = {this.props.handleInputFocus}
                onBlur = {this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont zoom':'iconfont zoom'}
            >&#xe614;</i>
          </SearchWrapper>
          
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe615;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
    )
  }
  
}

//将原先state中数据放在reducer中，然后此组件若想使用则写在该方法中
const mapStateToProps = (state)=>{
    // console.log(state)
    return {
      //分成小reducer后需要从子级目录取值
      // focused: state.header.focused  //此时store中的数据映射到props中
      //imutable 获取方式
      // focused: state.header.get('focused') //state.header是js获取方式，.get是immutable获取方式，所以为了统一使用redux-immutable
      //改为redux-immutable后的方法
      // focused: state.get('header').get('focused')
      //等价于
      focused: state.getIn(['header','focused'])
    }
}
// 组件改变store中的内容  使用dispatch方法 
const mapDispatchToProps = (dispatch)=>{
  // console.log(dispatch)
  return {
    handleInputFocus(){
      //1. action
      // const action = {
      //   type: 'search_focus'
      // };
      const action = actionCreators.searchFocus();
      //2. dispath
      dispatch(action);
    },
    handleInputBlur(){
      //1. action
      // const action = {
      //   type: 'search_blur'
      // };
      const action = actionCreators.searchBlur();
      //2. dispath
      dispatch(action);
    }
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);


