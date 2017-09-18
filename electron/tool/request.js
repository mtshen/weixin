const {URL} = require('url');
const https = require('https');
const qs = require('querystring');
let {stringifyForm} = require('./form');

let defaultOption = {
    host: '127.0.0.1',
    url: '/',
    method: 'get',
    data: {},
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

function request({
    url = defaultOption.url,
    method = defaultOption.method, 
    data = defaultOption.data, 
    headers = defaultOption.headers,
    callback, fail
}) {
    let urlObj = new URL(url);
    let host = urlObj.hostname;
    let port = urlObj.port;
    url = urlObj.pathname;

    let requestData = getRequestData({url, host, port, method, data, headers});
    requestData.path = requestData.url;
    let $data = requestData.data;
    delete requestData.url;
    delete requestData.data;
    let chunks = [];
    let chunkSize = 0;
    let req = https.request(requestData, function (res) {
        res.on('data', function (chunk) {
            chunks.push(chunk);
            chunkSize += chunk.length;
        });

        res.on('end', function() {
            var data = null;  
            switch(chunks.length) {  
                case 0:     data = new Buffer(0);           break;  
                case 1:     data = chunks[0];               break;  
                default:    data = Buffer.concat(chunks);   break;  
            }
            callback(data); 
        });
    });

    req.on('error', function (e) {
        fail && fail(e);
    });
    debugger
    req.end($data);
}

function getRequestData(option) {
    let {data, method, headers} = option;
    debugger
    switch (method) {
        case 'form':
            option.method = 'post';
            option.data = stringifyForm(data);
            option.headers['Content-Length'] || (option.headers['Content-Length'] = option.data.length);
            break;
        case 'get':
            let dataStr = stringifyForm(data);
            option.url  += dataStr
            option.data = undefined;
            option.headers['Content-Length'] || (option.headers['Content-Length'] = dataStr.length);
            break;
    }

    return option;
}

module.exports = {defaultOption, request, getRequestData};