function smallestCommons(arr) {

  let min = arr[0];
  let max = arr[1];
  if(min > max) {
    max = arr[0];
    min = arr[1];
  }

  if(min === 0 || max === 0) return 0;

  let divider = max;
  for(let i = max; i >= min; i--) {
    if(divider % i !== 0) {
        divider *= getMinDivider(i, divider);
    }
  }

  return divider;
}

function getMinDivider(val, div) {
  for(let i = 2; i < val; i++) {
    if(val % i === 0 && div*i % val === 0) {
      return i;
    }
  }

  return val;
}

smallestCommons([23,18]);