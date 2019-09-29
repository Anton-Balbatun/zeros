module.exports = function zeros(expression) {
  // your solution
  let numberOfTwos = 0
  let numberOfFive = 0
  let y= 0
  let z = 0  
  let i = 0
  let arr = expression.split('*')
  
  for (let index = 0; index < arr.length; index++) {
       
    i=y=z=+arr[index].replace(/\!/g,'')
       
    if (!arr[index].includes('!!')) {
        
      while(y >= 2){
        y =  Math.trunc(y/2) 
        numberOfTwos = numberOfTwos + y
        }
      
      while(z >= 5){
        z =  Math.trunc(z/5) 
        numberOfFive = numberOfFive + z
        }
        
    }else {
      
      if (y%2===0) {
 
          for (let k = 1; k <= z; k++) {
            if (k%10 === 0) {
              numberOfFive++ 
              if (k%50===0) {
                numberOfFive++
              }
            }
          }

        while(y >= 2){
          y =  Math.trunc(y/2) // 
          numberOfTwos = numberOfTwos + y
          }
 
      }else{

        for (let j = 1; j <= i; j++) {
          if (j%10 === 0) {
            numberOfFive--
            if (j%50===0) {
              numberOfFive--
            }
          }
        }

        while(z >=5  ){
          z =  Math.trunc(z/5) 
          numberOfFive = numberOfFive + z 
          }    
      }
    }
  }
  return Math.min(numberOfTwos,numberOfFive) 
  }
  