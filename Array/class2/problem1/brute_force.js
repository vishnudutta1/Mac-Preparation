// seprate odd and even 

// input                           output 

// [12,34,45,9,8,90,3]             [12,34,8,90,45,9,3]

var arr = [12,34,45,9,8,90,3]

var out = [];

for(var i = 0;i <arr.length;i++){
    if(arr[i]%2==0){
        out.push(arr[i])
    }
}


for(var i = 0;i <arr.length;i++){
    if(arr[i]%2==1){
        out.push(arr[i])
    }
}

console.log(out)
