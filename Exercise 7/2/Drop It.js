function dropElements(arr, func) {

  let logic = func(0);

  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      if(!logic) {
        newArr = arr.slice(i);
      }else {
        arr.splice(i - 1);
        newArr = arr;
      }
      break;
    }
  }

  return newArr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });