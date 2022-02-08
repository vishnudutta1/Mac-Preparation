// seprate zeroes and ones 

// input = [1,1,0,1,0,0,0,1]

// output = [0,0,0,0,1,1,1,1]

var arr = [1,1,0,1,0,0,0,1]

var out = [];

for(var i = 0;i<arr.length;i++){
    if(arr[i] == 0)
    {
        out.push(arr[i])
    }
}

for(var i = 0;i<arr.length;i++){
    if(arr[i] == 1)
    {
        out.push(arr[i])
    }
}

console.log(out)