// wap to find factorial
// const prompt=require('prompt-sync')({sigint:true})
// input=prompt("Enter the Number:")
// num=Number(input)
// fact=1
// while(num>0)
// {
//    fact*=num
//    num--
// }

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Example usage:
  const number = 5;
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
