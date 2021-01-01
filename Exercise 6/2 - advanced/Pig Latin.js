function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let cons = "";
  let endVowels = "way";
  let endCons = "ay";

  if(vowels.indexOf(str[0]) >= 0) {
    str += endVowels;
  }else {
    for(let i = 0; i < str.length; i++) {
      if(vowels.indexOf(str[i]) === -1) {
        cons += str[i];
      }else {
        break;
      }
    }

    str = str.slice(cons.length) + cons + endCons;

  }
  
  return str;
}

translatePigLatin("consonants");