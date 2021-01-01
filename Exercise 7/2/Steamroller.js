function steamrollArray(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= 0) {

      let insideArr = arr[i];
      for(let j = 0; j < insideArr.length; j++) {
        if(insideArr[j].length) {
          newArr.push(getNumber(insideArr[j]));
        }else {
          newArr.push(insideArr[j]);
        }
      }
      
    }else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function getNumber(num) {
  if(!(num instanceof Array)) {
    return num;
  }
  
  return getNumber(num[0]);
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [[{}]], [3, [[4]]]]);