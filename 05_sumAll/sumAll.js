const sumAll = function(num1,num2) {
    let output = 0;
    let start = num1;
    let end = num2;
    if(num1 > num2){
      start = num2;
      end = num1;
    }
    if(num1 < 0 || num2 < 0){
      return "ERROR";
    }
    else if(typeof(num1) !== typeof(num2)){
      return "ERROR";
    }
    else{
      for(let i = start; i <= end; i++){
        output += i;
      }
    }
    return output;
  };
  

// Do not edit below this line
module.exports = sumAll;
