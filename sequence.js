
var isFib = function(seq) {
  for(var i=2;i<seq.length;++i){
    if(seq[i-2]+seq[i-1] === seq[i]) 
  };
};
var nextFib = function(seq) {
  if(seq.length===0){return 0;}
  if(seq.length===1){return 1;}
  return seq[seq.length - 2] + seq[seq.length - 1];
};

var nextInSeq = function(seq) {
  
};
