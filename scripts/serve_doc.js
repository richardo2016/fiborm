/// <reference no-default-lib="true" />
/// <reference types="@fibjs/types" />

const path = require('path');
const http = require('http');
const mq = require('mq');

const port = process.env.PORT || 3030;

const docsHandler = new http.fileHandler(path.resolve(__dirname, '../docs'));

const route = new mq.Routing({
    '*': docsHandler
});

const svr = new http.Server(port, route);

svr.start();
console.log(`[app] svr stareted at http://localhost:${svr.socket.localPort}`);