## dz-ui
[![npm version](https://badge.fury.io/js/dz-ui.svg)](https://badge.fury.io/js/dz-ui)
## QuickStart
```base
npm install dz-ui
```

## usage
```
import DzUi from 'dz-ui'
import 'dz-ui/dist/dz-ui.css'
Vue.use(DzUi)
```

## 按需加载 
- 首先，安装 babel-plugin-component：  
npm install babel-plugin-component -D
```js
// .babelrc or babel-loader option
"plugins": [ [
    "component",
    {
      "libraryName": "dz-ui",
      "styleLibrary": {
        "name": "style"
      }
    }
  ]]
```
