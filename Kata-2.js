var conditionalSum = function(values, condition) {
  // Your code here
  var array = values;
  var result = 0;
  if(condition === "even"){
    for(var i = 0; i <= array.length-1; i++){
      if(array[i] % 2 === 0){
        result += array[i];
      }
    }
  }
  else if(condition === "odd"){
    for(var i = 0; i <= array.length-1; i++){
      if(array[i] % 2 !== 0){
        result += array[i];
      }
    }
  }

  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));