function binaryAgent(str) {
  let stringOfArr = str.split(" ");
  str = "";

  for(let i = 0; i < stringOfArr.length; i++) {
    let func = getCharCode(stringOfArr[i]);
    str += String.fromCharCode(func);
  }

  return str;
}

function getCharCode(str) {
  let number = str.split("");
  let sum = 0;
  let i = 0;
  let expn = number.length - 1;

  do {
    if(+number[i] > 0) sum += 2**expn;
    i++;
    expn--;
  } while(expn >= 0);

  return sum;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");