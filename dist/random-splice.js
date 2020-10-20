(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.randomSplice = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.randomSplice = void 0;

  var randomSplice = function randomSplice(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Parameter 1 should be of type Array');
    }

    var len = arr.length;

    if (!len) {
      throw new Error('No items in the array');
    }

    var randomIndex = Math.floor(Math.random() * len);
    return arr.splice(randomIndex, 1)[0];
  };

  _exports.randomSplice = randomSplice;
});
