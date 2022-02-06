var arr = [3,4,3,2,4,4,4,4,3,3,3];

var max_count = 0
var index = 0

var n = Math.floor(arr.length/2  +1);

//console.log(n)

for(var i = 0;i<arr.length;i++){
    var count = 0
    for(var j = i;j <arr.length;j++){
        if(arr[i]==arr[j]){
            count++
        }

    }
    if(count>max_count){
        max_count = count;
        index = arr[i]
    }
    

}

if(max_count>= n){
    console.log(index)
}

else {console.log("-1")}