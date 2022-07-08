
let str = "328"
let arr = str.split("")

  if (arr[0]>arr[arr.length-1]) {
   console.log(arr[0]);
  }  
 else if (arr[0]<arr[arr.length-1]) {
    console.log(arr[arr.length-1]);
 }
 else if (arr[0]==arr[arr.length-1])
 console.log("=");
