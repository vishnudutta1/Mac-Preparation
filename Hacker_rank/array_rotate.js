

var d = 2;


    var ar = [1,2,3,4,5]

    
var arr = []
//   if(d==1){
//       var arr = []

//   }

for(var i = 0;i <ar.length;i++){
    // for(var j = 0;j <ar.length;j++){

    // }
   var temp = ar[0]
    ar[i] = ar[i+1];
    if(ar[i]== undefined){
        ar[i] = temp
    }

}

console.log(ar)