function datatype (el) {
  return Object.prototype.toLocaleString.call(el).slice(8, -1);
}


function deepclone (el) {
  var newel;
  if (datatype(el) === 'Array') {
    newel = [];
  }
  else if (datatype(el) === 'Object')
  {
     newel = {};
  }
  else {
    newel = el;
  };
  for (var k in el) {
    
    if (datatype(el[k]) === 'Array') {
     
      newel[k]= deepclone(el[k])
     
  }
    else if (datatype(el[k]) === 'Object'){
     newel[k]=deepclone(el[k])
}
else {
       newel[k]=el[k]
}

  }
  return newel;
}