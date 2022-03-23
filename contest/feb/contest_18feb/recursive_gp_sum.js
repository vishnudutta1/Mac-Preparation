var n = 3

var r = 5;

function gpSum(n,r){
    if((1/r**n)<=0){
        return ;
    }

    console.log(1 + gpSum(1/r**(n+1),r))
}

 gpSum(n,r)