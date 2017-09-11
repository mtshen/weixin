### 微信客户端项目
[![npm back](https://img.shields.io/badge/后端-nodeJS-green.svg)](https://github.com/mtshen/weixin)
[![npm web](https://img.shields.io/badge/前端-react-blue.svg)](https://github.com/mtshen/weixin)

------------------------------
### 技术选型

类型 | 技术
----- |-----
后端      | nodeJS
数据库    | monggoDB
前端框架  | react
封装      | electron
构建      | webpack

### 工作流
![npm web](https://github.com/mtshen/weixin/blob/master/docs/workflow.png)

###### 前端代码结构
|--- src            源文件目录
|  --- images       图片资源
|  --- data         其他资源, 如json或font字体
|  --- shared           公共组件位置,包含所有公共组件
|  --- public           公共的非组件库, 包含一些与后台交互的代码
|  --- scanIndex        扫码页
|     --- components        扫码页组件
|     --- public            扫码页非组件

| | | | | | | | | | | | | | | | | |
V V V V V V V V V V V V V V V V V V

|--- build
|  --- html     编译后的html
|  --- css      编译后的css
|  --- js       编译后的js
|  --- images   压缩后的图片资源
|  --- data     其他资源, 如json或font字体

###### 后端代码结构
|--- node
|  ---
### 待续...
