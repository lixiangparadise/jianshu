import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './common/header';
import {Detail,Home, Login, Write} from './pages';
import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
  render(){
    return (
      // 将store提供给内部组件
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login'  component={Login}></Route>
            <Route path='/detail'  component={Detail}></Route>
            <Route path='/write'  component={Write}></Route>
            {/* 其他重定向 */}
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
  );
  }
}

export default App;
