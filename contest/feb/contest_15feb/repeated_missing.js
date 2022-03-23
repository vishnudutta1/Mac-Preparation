var arr = [1,2,2,3,4]

var n = arr.length;

var j = 1;

while(j<=n){
    var count = 0;

    for(var i = 0;i<arr.length;i++){
        if(arr[i]==j){
            j++;
            count++
        }

        if(count>1){
            console.log(arr[j])
        }
    }
}