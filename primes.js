

var fibLessThan = function(n) {
  if(n<1){return [];}
  for(var a = [0,1]; a[a.length-1] < n; a[a.length-1] = a[a.length-3] + a[a.length-2]);
  return a
};

var isPrimeWilson = function(n) {
  return math.factorial(n-1) % n === n-1;
};

var isPrime = function(n) {
  if(n === 2){return true;}
  if(n % 1 !== 0 || n <= 1){return false;}
  for(var d = 3; d*d <= n; d = d + 2) {
    if(n%d===0){return false;}
  }
  return true;
};


