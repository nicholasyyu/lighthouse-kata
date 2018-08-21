var repeatNumbers = function(data) {
  var string = '';
  for ( var x = 0; x < data.length; x++){
    var a = data[x][0];
    var b = data[x][1];
    for(var i = b; i > 0; i--){
      string += a;
      if(i === 1 && x < data.length - 1){
        string += ',';
      }
    }
  }
  return string;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));