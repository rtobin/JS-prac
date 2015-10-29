"use strict";



var recRange = function(start, end){
  var res = []
  if (end < start) { return [] }
  else if ( end === start) { return [start] }
  else { return [start].concat(recRange(start + 1, end)) }
}

var recExp1 = function(b, n) {
  if (n === 0) {
    return 1
  }

  else if (n === 1) {
    return  b
  }
  else {
    return b * recExp1(b, n-1)


  }

}

var recExp2 = function(b, n) {
  if (n === 0){
    return 1
  }
  else if (n===1){
    return  b
  }

  else{
      if(n%2 === 0){
        return recExp2(b, n/2) * recExp2(b, n/2)

      }
      else{
        return b * (recExp2(b, (n-1) /2)) * (recExp2(b, (n-1) /2))

      }
  }
}

var fibRec = function(n) {
  var fibs = []
  if (n === 0) {
    return []
  }
  else if (n === 1){
    return [1]
  }
  else if (n === 2) {
    return [1, 1]

  }
  else {
    var prev = fibRec(n-1)

    var next_number = prev[prev.length-2] + prev[prev.length-1]
    return prev.concat([next_number])
  }
};

var bSearch = function(array, target) {
  if ((array.length === 1) && (array[0] != target)){
    return null;
  }
  var probe_index = Math.floor(array.length / 2);
  var middle_val = array[probe_index];

  if (middle_val > target) {
    return bSearch(array.slice(0, probe_index), target);
  }

  else if (middle_val === target) {
    return probe_index;
  }

  else {
    var res = bSearch(array.slice(probe_index + 1, array.length), target);
    if (res === null){
      return null;
    }
    else {
      return probe_index + res + 1;
    }
  }
};


var makeChange = function(target, coins) {
  var best_combination = []

  for(var i = 0; i < coins.length; i++) {
    var coin = coins[i]
    if (coin <= target) {

    var remainder = target - coin
    var used_coins = [coin]

    var current_combo = used_coins.concat(makeChange(remainder, coins))

    if (best_combination.length === 0 || best_combination.length > current_combo.length) {
      best_combination = current_combo}


  }


  }
return best_combination

}
