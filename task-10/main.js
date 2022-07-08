let arr = str.split("")
let index = [];
let first = 0;
let last = 0;
let isFound = false;
for (let i = 0; i < arr.length; i++) {
   
  if (arr[i] == " " ) {
   index.push([i])
   first = index[0];
   last = index[index.length-1]
   isFound = true;
  } 
}
 if (isFound==true){
console.log(first);
console.log(last);
 }
 else {
    console.log("-1");
 }
