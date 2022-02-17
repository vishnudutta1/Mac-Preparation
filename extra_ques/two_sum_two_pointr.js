var arr = [1,2,3,4,5,6,7,8,9]

var sum = 8;

var i = 0;

var j = arr.length-1;

var count = 0

while(i<=j){
    if((arr[i]+arr[j])==sum ){
        if(i!==j){
            console.log(arr[i],arr[j])
        }
        count++
        i++;
        j--
      
       
      
    }

    else if((arr[i]+arr[j])>sum){
        j--
    }

    else if((arr[i]+arr[j])<sum){
        i++
    }
}

if(count==0){
    console.log("not found")
}






var sum = 12;

for(var i = 0;i <arr.length;i++){
    for(var j = i;j<arr.length;j++){
        if((arr[i]+arr[j])==sum && i!=j){

            console.log(arr[i],arr[j])
        }
    }
}
