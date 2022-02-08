// seprate zeroes and ones 

// input = [1,1,0,1,0,0,0,1]

// output = [0,0,0,0,1,1,1,1]

var arr = [1,1,0,1,0,0,0,1,0,0]

// var arr = arr.sort((a,b) => a-b);

var left = 0;

var right = arr.length-1;

while(left<=right){
    if(arr[left]==0){
        left++
    }

   else if(arr[right]==1){
        right--
    }

    else if( (arr[right]==0) && (arr[left]==1)){
        var temp = arr[right];

    arr[right] = arr[left];
    
    arr[left] = temp
    }
}
console.log(arr)