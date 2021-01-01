function convertHTML(str) {
  let replace = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];
  let symbols = ['&', '<', '>', '"', '\''];
  let ind = 0;
  let newStr = str.split('');

  newStr = newStr.map(item => {
    ind = symbols.indexOf(item);
    if(ind >= 0) return replace[ind];

    return item;
  }).join('');

  return newStr;
}

convertHTML("Hamburgers < Pizza < Tacos");