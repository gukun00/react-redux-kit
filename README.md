# react-redux-kit
本项目基于react+redux+webpack技术栈完成,ui库源自于antd。
脚手架参考： git@github.com:Justin-lu/react-redux-antd.git

## Feature List
- hot reloading/browser-sync/redux devtools on dev build
![](http://ww1.sinaimg.cn/large/785cd1e3gw1f69xb4vta2g20tb0fs7c5.gif)
- minify/chunkhash/trackJS on production build
![](http://ww4.sinaimg.cn/large/785cd1e3gw1f69xey2om7g20tb0fs1kx.gif)
- eslint both of terminal and pre-commit
![](http://ww1.sinaimg.cn/large/785cd1e3gw1f69xiq41uog20tb0fsn8e.gif)
![](http://ww2.sinaimg.cn/large/785cd1e3gw1f69zn0p20gj21je0jan1f.jpg)
- unit test of react/redux
![](http://ww3.sinaimg.cn/large/785cd1e3gw1f69x6lccmij21020m2juk.jpg)
![](http://ww2.sinaimg.cn/large/785cd1e3gw1f69zp1v97ij21kw0u8td8.jpg)
- es6/webapck
- sass support
- UI Kit: Ant Design
- isomorphic-fetch
- mock data
- example app
- ...

## Getting Started
### install

```
npm install --global yarn # install yarn
git clone git@github.com:Justin-lu/react-redux-antd.git demo
cd demo
yarn

# run dev
npm run start
# run mock server
npm run start:mock
```

### npm script

```shell
# dev start with test/lint
npm run start

# prodction start with browser-sync server
npm run start:prod

# production build
npm run build

# mock data
npm run start:mock

# run test
npm run test

# generate test cover report
npm run test:cover

```

### eslint

- enable pre-commit hook

```shell
cd .git/hooks/ && ln -s ./../../tools/pre-commit pre-commit
```

# history
##  2017-02-05
- 初次建立，可运行
- 后面重构我的热网项目模块
  - 1. 热用户管理
  - 2. 预付费管理系统1
