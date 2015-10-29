Array.prototype.myUniq = function(){
  var arr = []
  var inArr = function(el, idx, array){
    if (arr.indexOf(el) === -1) {
      arr.push(el)
    }
  }
  this.forEach(inArr)
  return arr
}
