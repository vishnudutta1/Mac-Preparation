var arr = [3,3,4,2,4,4,2,4,4]

var n = Math.floor(arr.length/2 +1)


var objct = {};
for(var i = 0 ; i <arr.length;i++){
  var char = arr[i];
  //console.log(char);
  //console.log(objct[char]);
  if(objct[char]===undefined){
    objct[char]=1;
  }else{
    var prev = objct[char];
    objct[char]= prev +1;
  }
//console.log(objct)
}


for(k in objct){
    //console.log(k + " - " + objct[k]);

    var arr1 = []

    arr1.push(objct[k])
    

    if(find_max(arr1)>= n){
        console.log( )
    }


}

console.log(arr1)


function find_max(arr){

    var max = arr[0];

    for(var i = 0;i <arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }

    return max

}




