module.exports = function check(str, bracketsConfig) {
    let open = []
    let close = []
    
    for(item of bracketsConfig){
        open.push(item[0])
        close.push(item[1])
    }
  
  if(str.length % 2 != 0){
      return false
  }
  
  let openBr = []
  
  for(br of str){
      if(openBr.length > 0 && close.includes(br) && open.includes(br) && (openBr[openBr.length-1] == br)){
          openBr.pop()
          continue
      }
      if(open.includes(br)){
          openBr.push(br)
      } else {
          if(openBr[openBr.length -1] == open[close.indexOf(br)]){
              openBr.pop()
          }
      }
  }
  
  return openBr.length == 0 ? true:false
    
  }