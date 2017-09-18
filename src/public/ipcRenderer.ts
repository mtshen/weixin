/**
 * 在浏览器中引入该模块会报错, 只有在electron环境中才能执行
 * npm run build
 * npm run test
 */
const { ipcRenderer } = require('electron');
let indexes: number = 1;
// 自动生成接口索引
function getIndexes(ipcUrl: string): string {
    return `${ipcUrl}_${Math.floor(Math.random() * 100000)}_${indexes ++}`;
}

// 发送一次请求
function send(ipcUrl: string, data?: {}, callback?: Function): void {
    let onceUrl: string = getIndexes(ipcUrl);
    ipcRenderer.send(ipcUrl, {onceUrl, data});
    ipcRenderer.once(onceUrl, callback);
}

// 监听端口消息
function listen(ipcName: string, callback: Function): void {
    ipcRenderer.on(ipcName, callback);
}

// 删除一个或多个监听
function removeListen(ipcName?: string, callback?: Function): void {
    if (ipcName && callback) {
        ipcRenderer.removeListen(ipcName, callback);
    } else if (ipcName && !callback) {
        ipcRenderer.removeAllListeners(ipcName);
    } else {
        ipcRenderer.removeAllListeners();
    }
}

export default {send, listen, removeListen};
