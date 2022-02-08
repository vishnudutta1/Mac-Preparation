// triplet whose sum is x 

// input                                           output

// [12,3,4,1,6,9] ,sum = 24                            12,3,9

// sorting + 2-pointer 

var arr = [12,3,4,1,6,9] 

var tar = 24 ;

var arr = arr.sort((a,b) => a-b);

console.log(arr)