let str = "Hello world! I learn to code."
let arr = str.split("")
let a = 0;
let b = 0;
for (let i = 0; i < arr.length; i++) {
   if (arr[i]=="!") {
   a++;
   }
   else if (arr[i]==".") {
    b++;
   }
    
}
console.log(a+b);
