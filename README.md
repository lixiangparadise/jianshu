1. styled-components
css 文件只要被引入就是全局的，不局限在某个文件，所以使用`styled-components`
安装：`npm install --save styled-components`

2. 放入reset样式


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
