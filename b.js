// const obj1 = {
//   name : "vishnu",
//    food (){
//     console.log(this.name)
//   }
// }

// const obj2 = {
//   name : "Abdul",

// }


// obj1.food.call(obj2)

// let myPromise = new Promise(function(resolve,reject){
//   let x = 2;
//   if (x==1){
//     resolve ("ok")
//   }

//   else {
//     reject ("error")
//   }
// })

// myPromise.then(function (res){
//   console.log(res)
// })

// myPromise.catch(function (rej){
//   console.log(rej)
// })

// function constructor(n,a){
//   this.n = name,
//   this.a = age,
// }


var arr = ["vishnu","dutta"];
var obj = {}

for(var i = 0;i <arr.length;i=i+2){

    for(var j = 1;j <arr.length;j=j+2){
        obj[arr[i]] = arr[j]

    }
    
  
}





