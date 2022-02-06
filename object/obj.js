//Given an array find the unique items in the array
var arr = ["a","b","c","a","b","e"];
var uniq = []
for(var i = 0 ; i <arr.length; i++){
  var c= 0 ; 
  for(var j = 0 ; j <uniq.length;j++)
  {
    if(uniq[j]==arr[i]){
      c++
    }
  }
  if(c==0){  uniq.push(arr[i])}}__
  
//console.log(uniq)
var details ={}
for(var i = 0 ; i <arr.length; i++){
  details[arr[i]] = "s";
}
//  console.log(details)
console.log(Object.keys(details));



// Given a string print the number of times each character appears

var name = "nrupul";
var objct = {};
for(var i = 0 ; i <name.length;i++){
  var char = name[i];
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
  console.log(k + " - " + objct[k]);
}



