var arr = [3,3,4,2,4,4,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5]

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
//
}


var arr1 = Object.values(objct)


var required_no  = find_max(arr1)

//console.log(required_no)

if(required_no>=n){
  for(k in objct){
    if(objct[k]==required_no){
      console.log(k)
    }
  }
}
else {
  console.log("-1")
}


function find_max(arr){

    var max = arr[0];

    for(var i = 0;i <arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }

    return max

}







