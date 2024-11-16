// Method 1 : Using formula - Without function
/* var n = 20;
console.log((n * (n+1)) / 2); */


// Method 1 : Using formula - With function
/* function sum(n){
    var result = (n * (n+1)) / 2;
    return result;
}
var n = 20;
console.log(sum(n)); */




// Method 2 : Using loop - Without function
/* var n = 10;
var sum = 0;
for (var i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log(sum); */


// Method 2 : Using loop - With function
/* function sum(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
var n = 10;
console.log(sum(n)); */