var str1 = "abc";

var obj1 = {};

for(var i = 0;i <str1.length;i++){
    var char = str1[i];
    
    
    if(obj1[char]===undefined){
        obj1[char] = 1;
    }

    else{
        var prev = obj1[char];

        obj1[char] = prev+1;
    }
}

for(k in obj1){
    console.log( k + "-" + obj1[k])
}

var arr2 = Object.keys(obj1)
var arr1 = Object.values(obj1)

console.log(arr2)