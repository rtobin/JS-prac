"use strict"
var array = [1,2,3];


Array.prototype.myEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i], i, this)
  }
};

Array.prototype.myMap = function (func) {
  var result = [];
  this.myEach(
    function (el, index, arr){
      result.push(
        func(el, index, arr)
      );
    }
  );
  return result;
};


// var func = function(acc, el) {
//   return acc + el
// }

Array.prototype.myInject = function (func) {
  var acc = this[0];

  this
    .slice(1, this.length)
    .myEach(function(el, index, arr) {
      acc = func(acc, el);
    });

  return acc;
};

// [1,2,3].myEach(fucntion (el, i, arr) {
//
// });
