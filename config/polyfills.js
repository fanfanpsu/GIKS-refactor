'use strict';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// localStorage polyfill for Node.js test environment
if (typeof localStorage === 'undefined' || localStorage === null) {
  var storage = {};
  global.localStorage = {
    getItem: function(key) { return storage[key] || null; },
    setItem: function(key, value) { storage[key] = String(value); },
    removeItem: function(key) { delete storage[key]; },
    clear: function() { storage = {}; }
  };
}
