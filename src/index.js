module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0){
    return false;
  }
  let stack = [];
  let arr = str.split('');
  for (let i=0; i < str.length; i++){
    bracketsConfig.map (el => {
        if(str[i] === el[1] && stack[stack.length-1] == el[0]){
            stack.pop(str[i]);
          }else{  
            if(str[i] === el[0])
            {
            stack.push(str[i]);
                }
      }
    })  
  }
  return stack.length === 0;
}
