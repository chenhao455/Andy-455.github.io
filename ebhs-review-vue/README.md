# vux-project

> A Vue.js project


## 项目建立启动命令

- 初始化项目：vue init webpack vue-demo(项目名)
- 配置淘宝镜像：yarn config set registry https://registry.npm.taobao.org
- 安装全部依赖：yarn install 或者 yarn
- 添加移除依赖：yarn add [package] 、yarn remove [package]
```
npm 你可能希望使用 --save   或 --save-dev
但是，这些都已经被 yarn add 和  yarn add --dev 所取代
```
- 本地端口调试项目：npm run dev 、 yarn run dev、yarn dev
```
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
