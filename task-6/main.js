let str = "Hello world! Hello,    country!"
let count =1;

for (let i = 0; i < str.length; i++) {
    if (str[i]===" " && str[i+1]!=" ") {
        count++; 
    }
}
console.log(count);
