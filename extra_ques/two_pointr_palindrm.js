var arr = [1,2,3,2,1]

var i = 0;

var j = arr.length-1;

var count = 0

while(i<=j){
    if(arr[i] == arr[j]){
        i++;
        j--
    }

    else if(arr[i] !== arr[j]){
       count++
        break;
    }
}

if(count>0){
    console.log("Not palindrm")
}

else{
    console.log("palindrm")
}



