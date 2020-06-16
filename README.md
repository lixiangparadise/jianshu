1. styled-components
css 文件只要被引入就是全局的，不局限在某个文件，所以使用`styled-components`
安装：`npm install --save styled-components`

2. 放入reset样式
3. 动画：`npm install react-transition-group`
4. redux 
   - `npm install redux`  //redux
   - `npm install react-redux`   //方便在react中使用redux


注意：class -> className

- 使用路由： `yarn add react-router-dom`
- 使用react-redux： `yarn add react-redux`

exact是精准匹配：如path='/'，则'/'和'/about'都会匹配，如果使用exact，则只会匹配'/'
switch是保证路由只渲染一个路径，当它匹配完一个路径后，就会停止渲染了。相比之下（不使用<Switch>包裹的情况下），每一个被location匹配到的<Route>将都会被渲染。
重定向：`<Redirect to="/" />`

```JS
export {add as default}; // 等同于 export default add;
import { default as foo } from 'modules'; // 等同于 import foo from 'modules';
```


- react-redux 流程：
1. 使用Provider包裹外层组件，传入store（该store使用createStore(reducer)创建）
2. 在使用redux数据的组件中使用connect(mapStateToProps, mapDispatchToProps)(组件)获取数据。
3. 将公共数据写在reducer中
4. 获取数据：mapStateToProps将redux中的数据映射到props中，传入的state参数即redux的数据，return即可；
5. 改变数据：mapDispatchToProps将dispatch方法映射到props中，首先创建一个action，使用传入的参数dispatch将此action传递给reducer，在reducer中根据action修改redux中的数据，并且返回新的数据给store。


redux-devtools-extension： 在浏览器中可以使用redux插件 github


将reducer拆分成多个reducer，即当前文件夹下，最后使用combineReducers组合


将action中的常量保存起来，创建constansts文件，创建action使用actionCreator文件