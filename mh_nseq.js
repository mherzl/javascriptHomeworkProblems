
var isGeom = function(arr) {
  if(arr.length===0){return 0;}
  if(arr.length===1){return 1;}
  var m = arr[1]/arr[0];
  for(var i=2; i<arr.length; ++i){
    if(arr[i]/arr[i-1]!==m){return false;}
  }
  return m;
};

var differences = function(arr){
  var ans = [];
  if(arr.length===0 || arr.length===1){return [];}
  for(var i=0;i<arr.length-1;++i){
    ans[i]=arr[i+1]-arr[i];
  }
  return ans;
};

var nSeq = function(arr) {
  var g = isGeom(arr);
  if(g!==false){return arr[arr.length-1]*g;}
  return arr[arr.length-1] + nSeq(differences(arr));
};

console.log(nSeq([1,2,3]));
console.log(nSeq([1,2,4]));
console.log(nSeq([1,-1,1]));
console.log(nSeq([3,5,7]));
console.log(nSeq([1,3,7]));
