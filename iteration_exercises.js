"use strict"

array = [3,2,1, 5]

Array.prototype.swap  = function(i, j) {
  var temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

Array.prototype.bubbleSort = function() {
  var sorted = true

  do {
    sorted = true;
    for (var i = 0; i < this.length-1; i ++) {
      if (this[i] > this[i+1]) {
        this.swap(i, i+1)
        sorted = false;
      }
    };
  } while (!sorted)
  return this;

};


String.prototype.mySubstrings = function() {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j<= this.length; j++) {
      var substring = this.slice(i,j)
      if (res.indexOf(substring) === -1) {
        res.push(substring)
      }
    }
  }

  return res;
};
