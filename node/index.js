// expressJS
const express = require('express');
const path = require('path');
const c = require('child_process');


const app = express();
const prot = 3000;

// 常量:静态文件目录
const buildPaht = path.join(__dirname, './../build');

// 设置静态文件
app.use(express.static(buildPaht));

// 启动服务
const server = app.listen(prot);
const url = `http://127.0.0.1:${prot}/`;
console.log(url);
c.exec('start ' + url);