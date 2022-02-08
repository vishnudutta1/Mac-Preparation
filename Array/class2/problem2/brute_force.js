// triplet whose sum is x 

// input                                           output

// [12,3,4,1,6,9] ,sum = 24                            12,3,9


var arr = [12,3,4,1,6,9];

var tar = 24;

var sum = 0;

for(var i = 0;i <arr.length;i++){
    for(var j = i+1;j<arr.length;j++){
        for(var k = j+1; k<arr.length;k++){
            if(arr[i] + arr[j] + arr[k] == tar ){
                console.log(arr[i],arr[j],arr[k])
            }
        }
    }
}