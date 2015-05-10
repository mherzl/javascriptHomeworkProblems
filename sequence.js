
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
  return seq[seq.length-1]^2/seq[seq.length-2];
};

var nextInSeq = function(seq) {
  if(isArith(seq)){return nextArith(seq);}
  if(isGeom(seq)){return nextGeom(seq);}
  if(isFib(seq)){return nextFib(seq);}
  return 0;
};
