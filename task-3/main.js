let str = "55555222"
let arr = str.split("")

let counta = 0;
let countb=0;
for (let i = 0; i < arr.length; i++) {
if (arr[i]==5) {
    counta++;
}
else if (arr[i]==2) {
    countb++;
}
}

if (counta>countb) {
    console.log("5");
}
else if (counta<countb) {
    console.log("2");
}
else if (counta==countb) {
    console.log("=");
}
