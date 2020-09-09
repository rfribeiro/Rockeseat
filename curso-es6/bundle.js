"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("babel-core/register");

require("babel-polyfill");

var mpromise = function mpromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("OK");
    }, 2000);
  });
}; //mpromise().then(response => {
//    console.log(response);
//})


function executaPromise() {
  return _executaPromise.apply(this, arguments);
}

function _executaPromise() {
  _executaPromise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return mpromise();

          case 2:
            response = _context.sent;
            console.log(response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _executaPromise.apply(this, arguments);
}

executaPromise();
