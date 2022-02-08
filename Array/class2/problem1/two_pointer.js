// seprate odd and even 

// input                           output 

// [12,34,45,9,8,90,3]             [12,34,8,90,45,9,3]

var arr  = [12,34,45,9,8,90,3];

var left = 0;

var right = arr.length-1;

while(left<=right){

    if(arr[left]%2==0){
        left++
    }

    else if(arr[right]%2==1){
        right--
    }

    else if ((arr[left]%2==1) && (arr[right]%2==0)){
        var temp = arr[right]
        arr[right] = arr[left]
        arr[left] = temp
    }
}

console.log(arr)