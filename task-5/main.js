let str = "+5-2+4-m/n*2:4"

let arr = str.split("")
let count = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i]== "+" || arr[i]== "-" || arr[i]=="*") {
   count++;
  
}
}
console.log(count);
