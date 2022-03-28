var arr = [1,2,3]

var sum = 0;

var out = [];

var out1 = arr.map(function(e){
  e += 1
  out.push(e)
})

console.log(out)




let sum1 = 0;

arr.forEach(myFunction);

function myFunction(item) {
  sum1 += item;
}

console.log(sum1)


var obj = {
  name: 'Elie', 
  rank : 'Pro'
};



// Pattern code

// var n = 4;

// var out = ""

// for(var i = 1;i<= n;i++ ){
//   for(var j = n;j>i;j--){
//     out = out + " "
  
//   }

//   for(var k = 1;k<=i;k++){
//     out = out + k
//   }

//   for(var l =  )

// }



async function get_data() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  return data;
}

get_data().then(data =>{
  data //fetched data
})