function truthCheck(collection, pre) {

  let filter = collection.filter(val => 
    (!val[pre] || val[pre] === null)
  );
  pre = (filter.length > 0) ? false : true;

  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");