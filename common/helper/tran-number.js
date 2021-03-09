export const tranNumber = (num, point = 1) => {
  let numStr = num.toString()
  // 千以内直接返回 
  if (numStr.length < 4) {
    return numStr;
  }
  //大于8位数是亿
  else if (numStr.length > 8) {
    let decimal = numStr.substring(numStr.length - 8,
      numStr.length - 8 + point);
    return parseFloat(parseInt(num / 100000000) + '.' +
      decimal) + '亿';
  }
  //大于5位数是万 (以1W分割 1W以下全部显示)
  else if (numStr.length > 4) {
    let decimal = numStr.substring(numStr.length - 4,
      numStr.length - 4 + point)
      
      if(parseInt(decimal) != 0){
        return parseFloat(parseInt(num / 10000) + '.' +
          decimal) + '万';
      }else {
        return parseFloat(parseInt(num / 10000)) + 'w'
      }
  }
  //大于3位数是k (以1k分割 1k以下全部显示)
  else if (numStr.length > 3) {
    let decimal = numStr.substring(numStr.length - 3,
      numStr.length - 3 + point)
      
      if(parseInt(decimal) != 0){
        return parseFloat(parseInt(num / 1000) + '.' +
          decimal) + '千';
      }else {
        return parseFloat(parseInt(num / 1000)) + 'k'
      }
  }
}
