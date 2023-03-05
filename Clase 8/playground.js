export function sumWithClosure(firstNum) {
    function suma(secondNum=0) {
      return firstNum+secondNum
    }
    return suma
  }  