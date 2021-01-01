function sumFibs(num) {
  let next = 1;
  let previous = 0;
  let current = 0;
  let sum = 0;

  while(next <= num) {
    if(next % 2 !== 0) sum += next;

    previous = current; // previous number
    current = next; // current number
    next += previous; // next number

  }
  return sum;
}