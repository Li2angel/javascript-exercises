const removeFromArray = function(...args) {
    let firstArg = arguments[0];
    let output = [];
    for(let i=0; i < firstArg.length; i++){
      if(args.includes(firstArg[i]) == false){
        output.push(firstArg[i])
      }
    }
    return output;
  };

// Do not edit below this line
module.exports = removeFromArray;
