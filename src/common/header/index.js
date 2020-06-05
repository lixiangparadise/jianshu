import React, { Component } from 'react'
import { HeaderWrapper, Logo, 
  Nav, NavItem, NavSearch, 
  Addition,Button, SearchWrapper } from './style';
class Header extends Component{
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
                      <i className="iconfont">&#xe614;</i>
                      <NavSearch></NavSearch>
                    </SearchWrapper>
                    
                </Nav>
                <Addition>
                  <Button class="writting">
                    <i className="iconfont">&#xe615;</i>
                    写文章
                  </Button>
                  <Button class="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
export default Header;