function sumPrimes(num) {
  let primes = [2]; // array of primes

  for(let i = 3; i <= num; i++) {
    if(!checkPrime(i, primes)) {
      primes.push(i);
    }
  }
  return primes.reduce((sum, i) => sum + i);
}

function checkPrime(val, primes) {
  let len = primes.length;
  let checkNotPrime = false;

  for(let i = 0; i < len; i++) {
    if(val % primes[i] === 0) {
      checkNotPrime = true;
      break;
    }
  }
  return checkNotPrime;
}

console.log(sumPrimes(10));