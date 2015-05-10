
var isFib = function(seq) {
  for(var i=2;i<seq.length;++i){
    if(seq[i-2]+seq[i-1] !== seq[i]) {return false;}
  };
  return true;
};
var nextFib = function(seq) {
  if(seq.length===0){return 0;}
  if(seq.length===1){return 1;}
  return seq[seq.length - 2] + seq[seq.length - 1];
};

var isArith = function(seq) {
  for(var i = 2; i<seq.length; ++i){
    if(seq[i-1]-seq[i-2] !== seq[i] - seq[i-1]){return false;}
  };
  return true;
};
var nextArith = function(seq) {
  return 2*seq[seq.length - 1] - seq[seq.length - 2];
};

var isGeom = function(seq) {
  for(var i = 2; i < seq.length; ++i){
    if(seq[i-1]/seq[i-2] !== seq[i]/seq[i-1]){return false;}
  }
  return true;
};
var nextGeom = function(seq) {
  return Math.pow(seq[seq.length-1],2) / seq[seq.length-2];
};

var nextInSeq = function(seq) {
  if(isArith(seq)){return nextArith(seq);}
  if(isGeom(seq)){return nextGeom(seq);}
  if(isFib(seq)){return nextFib(seq);}
  return 0;
};

console.log("arithmetic sequences:");
console.log("[0,1,2]");
console.log(nextInSeq([0,1,2]));
console.log("[5,7,9]");
console.log(nextInSeq([5,7,9]));

console.log("geometric sequences:");
console.log("[1,2,4]");
console.log(nextInSeq([1,2,4]));
console.log("[1,-1,1]");
console.log(nextInSeq([1,-1,1]));

console.log("fibonacci sequences");
console.log("[0,1,1]");
console.log(nextInSeq([0,1,1]));
console.log("[6,7,13]");
console.log(nextInSeq([6,7,13]));

console.log("unknown sequences:");
console.log("[2,4,27] Ackermann Sequence (next is 4^4^4^4 which has 10^154 digits)");
console.log(nextInSeq([2,4,27]));
console.log("[1,6,21,107] Busy Beaver Sequence (next hasn't been pinned down but is greater than 47,176,870)");
console.log(nextInSeq([1,6,21,107]));

