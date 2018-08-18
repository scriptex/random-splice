(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.index = mod.exports;
  }
})(this, function () {
  "use strict";

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

  module.exports = randomSplice;
});
