// Polyfill for process.binding('http_parser') removed in Node.js v16+
// Required by http-deceiver (dep of spdy -> webpack-dev-server)
const http = require('http');

const methods = http.METHODS || [
  'ACL', 'BIND', 'CHECKOUT', 'CONNECT', 'COPY', 'DELETE',
  'GET', 'HEAD', 'LINK', 'LOCK', 'M-SEARCH', 'MERGE',
  'MKACTIVITY', 'MKCALENDAR', 'MKCOL', 'MOVE', 'NOTIFY',
  'OPTIONS', 'PATCH', 'POST', 'PROPFIND', 'PROPPATCH',
  'PURGE', 'PUT', 'REBIND', 'REPORT', 'SEARCH', 'SOURCE',
  'SUBSCRIBE', 'TRACE', 'UNBIND', 'UNLINK', 'UNLOCK',
  'UNSUBSCRIBE'
];

const reverseMethods = {};

const kOnHeaders = 0;
const kOnHeadersComplete = 1;
const kOnBody = 2;
const kOnMessageComplete = 3;

// Stub HTTPParser
class HTTPParser {
  static get methods() { return methods; }
  static get kOnHeaders() { return kOnHeaders; }
  static get kOnHeadersComplete() { return kOnHeadersComplete; }
  static get kOnBody() { return kOnBody; }
  static get kOnMessageComplete() { return kOnMessageComplete; }
}

const originalBinding = process.binding;

process.binding = function(name) {
  if (name === 'http_parser') {
    return { HTTPParser, methods, reverseMethods };
  }
  return originalBinding.call(process, name);
};
