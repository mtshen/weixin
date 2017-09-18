const { request } = require('./tool/request');
const codeReg = /window\.QRLogin\.code *= *(\d+);/i;
const uuidReg = /window\.QRLogin\.uuid *= *"([\w=]*)";/i;
const errorReg = /window\.QRLogin\.error *= *"([\w]*)";/i;
let _Id = undefined;
let result = {
    uuid: undefined
};

// 获取时间戳
function get_() {
    !_Id ? _Id = + new Date : _Id ++;
    return _Id;
}

function getUuid(callback) {
    request({
        url: 'https://login.weixin.qq.com/jslogin',
        method: 'form',
        data: {
            appid: 'wx782c26e4c19acffb',
            fun: 'new',
            lang: 'zh_CN',
            _: + get_()
        },
        callback: function (data) {
            let code = codeReg.exec(data.toString());
            let uuid = uuidReg.exec(data.toString());
            let error = errorReg.exec(data.toString());
            code && (code = code[1]);
            uuid && (uuid = uuid[1]);
            error && (error = error[1]);

            if (code == 200 && uuid) {
                result.uuid = uuid;
                callback && callback(uuid);
            } else {
                getUuid(callback);
            }
        },
        fail: function(data) {
            console.log(data);
        }
    });
}

function getQRcode() {
    https://login.weixin.qq.com/qrcode/${result.uuid}
}

getUuid(function() {
    getQRcode();
});
