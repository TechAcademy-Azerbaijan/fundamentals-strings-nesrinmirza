
let str = "31,15,40"
let arr = str.split(",")
let min = arr[0]
for (let i = 0; i < arr.length; i++) {
    if(arr[i]<min)
    min = arr[i]
}
console.log(min);
  
});
