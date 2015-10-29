"use strict";

var array = [1,2,3];
var matrix = [[1,2,3], [4,5,6], [7,8,9]];


Array.prototype.myUniq = function(){
  var arr = []
  var inArr = function(el){
    if (arr.indexOf(el) === -1) {
      arr.push(el)
    }
  }
  this.forEach(inArr)
  return arr
}

Array.prototype.twoSum = function(target) {

    for(var i = 0; i < this.length; i++){

      for(var j = i+1; j < this.length; j++){
          if (this[i]+this[j] === target) {
            return [i,j];
          };
    };
  };
  return -0;
}

Array.prototype.myTranspose = function() {

  var transposed = [];

    for(var j = 0; j < this.length; j++){

      var row = [];

      for(var i = 0; i < this[0].length; i++) {

        row.push(this[i][j]);

      }
      transposed.push(row);


    }
    return transposed;
}
