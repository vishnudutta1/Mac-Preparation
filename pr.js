

// var uniq = []
// for(var i = 0 ; i <arr.length; i++){
//   var c= 0 ; 
//   for(var j = 0 ; j <uniq.length;j++)
//   {
//     if(uniq[j]==arr[i]){
//       c++
//     }
//   }
//   if(c==0){  uniq.push(arr[i])}}
  
// console.log(uniq)
// var details ={}
// for(var i = 0 ; i <arr.length; i++){
//   details[arr[i]] = "s";
// }
// //  console.log(details)
// console.log(Object.keys(details));



// Given a string print the number of times each character appears

var arr = ["masai","school","masai"];
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
  console.log(k + " "  + objct[k]);
}



