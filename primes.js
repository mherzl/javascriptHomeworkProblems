

var fibLessThan = function(n) {
  if(n<0){return [];}
  if(n<1){return [0];}
  var a = [0,1];
  var next = 1;
  while(next < n) {
    a[a.length] = next;
    next = a[a.length-2] + a[a.length-1];
  }
  return a
};

var fac = function(n) {
  if(n===0){return 1;}
  return n*fac(n-1);
};

var isPrimeWilson = function(n) {
  return fac(n-1) % n === n-1;
};

var isPrime = function(n) {
  if(n === 2){return true;}
  if(n % 1 !== 0 || n <= 1){return false;}
  for(var d = 3; d*d <= n; d = d + 2) {
    if(n%d===0){return false;}
  }
  return true;
};

console.log("fibLessThan(20)");
console.log(fibLessThan(20));

console.log("isPrimeWilson(23)");
console.log(isPrimeWilson(23));
console.log("fac(22)");
console.log(fac(22));
console.log("fac(22)%23");
console.log(fac(22)%23);
console.log("isPrimeWilson(53)");
console.log("53 is prime; fac(52) seems to be overflowing the capacity of js's large number representation and automatically rounding");
console.log(isPrimeWilson(53));
console.log("fac(52)");
console.log(fac(52));
console.log("fac(52)%53");
console.log(fac(52)%53);

console.log("isPrime(53)");
console.log(isPrime(53));
