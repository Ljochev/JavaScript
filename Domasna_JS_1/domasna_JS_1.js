let hasCoffee = true;
let hasTea = false;
let hasMilk = true;
console.log("   ")

console.log("The student have either tea or milk :",(hasTea || hasMilk))
console.log("The student have both coffee and tea :",(hasCoffee && hasTea))
console.log("It is true that the student doesn't have tea :",(true != hasTea))
console.log("The student have either coffee or milk, but not both :",((hasCoffee || hasMilk) && (hasCoffee != hasMilk)))
console.log("It is true that the student has either tea and milk, or coffee and tea :",((hasTea && hasMilk) || (hasCoffee && hasTea)))
console.log("The student have neither coffee nor tea :",((hasTea != true) || (hasCoffee != true)))

console.log("   ")

   const num1 = 10;
   const num2 = 5;
   const num3 = 8;
   const num4 = 2;
   const num5 = 12;
   const num6 = 4;
   const num7 = 3;
   
   const result1 = (num1 * num2) + (( num3 / num4) - num5) - (num6 % num7)
   console.log(result1)
   const result2 = (num1 / num2) * (( num3 * num4) + num5) - (num6 / num7)
   console.log(result2)
   const result3 = num1 * (num2 + (( num3 % num4) - num5)) + (num6 - num7)
   console.log(result3)
   const result4 = ((num1 - num2) +  (num3 / num4)) - (num5 * (num6 % num7))
   console.log(result4)
   const result5 = ((num1 % num2) +  num3) / ((num4 - num5) / (num6 % num7))
   console.log(result5)

   console.log("   ")

   let num11 = 12
   let num22 = 4

   let sum = num11 + num22
   let diff = num11 - num22
   let mult = num11 * num22
   let div = num11 / num22
   let rem = num11 % num22

   console.log(sum)
   console.log(diff)
   console.log(mult)
   console.log(div)
   console.log(rem)