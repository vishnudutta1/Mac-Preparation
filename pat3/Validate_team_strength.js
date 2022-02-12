var arr = [1,2,3,4,2,1];

var k = 0;

var n = 3;

var sum1 = 0;

var sum2 = 0;

for(var i = 0;i < n-1;i++){
    sum1 = sum1 + arr[i]
}

for(var i = n;i < 2*n-1;i++){
    sum2 = sum2 + arr[i]
}

var diff1 = sum1-sum2;

var diff2 = sum2-sum1;

if(diff1 <= k || diff2 <= k){
    console.log("Invalid")
}

else if(diff1 > k || diff2 > k){
    console.log("Valid")
}