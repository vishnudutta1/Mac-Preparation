// // var arr = [1,2,3,5,4]

// // var N = 1;

// // var M = arr.length;

// // var arr = arr.sort((a,b)=>a-b);

// // var diff = N-M;



// // console.log(arr)


// // var stack = [-2,3,1,-4,6];

// // var st = []

// // var i = 0;
// // var j = stack.length-1;

// // while(i<=j){
// //     if(stack[i]>0){
// //         st.push(stack[i]);
// //         i++
// //     }

// //     else if(stack[i]<0){
// //         stack[i] = 0 -(stack[i]);

// //         st.push(stack[i]);
// //         i++
// //     }
// // }



// // var arr = st.sort((a,b)=>a-b);

// // var l = 0;

// // var m = st.length-1;




// // while(l<=m){

   

// //         if((0-arr[l])==stack[i]){
// //             for(var i =0;i <stack.length;i++){

// //             }

// //         }

    
    
// // }
// // console.log();


// var arr = [1,3,2,4];

// var i = 0;

// var j = arr.length-1;

// var newa = []

// while(i<=j){

//     if(arr[i]<arr[i+1]){
        
//         newa.push(arr[i+1])

//         i++;
//     }

//     else if(arr[i]<arr[i+1]){ 

//         i++

//         newa.push(arr[i+1])

//     }

//     // if(i==j){
//     //     newa.push(-1)
//     // }
// }

// console.log(newa)




// var arr = [1,2,3,4,5]



// var tar = 1

// var arr = arr.sort((a,b)=>a-b);

// var l = arr.length-1-tar;

// var min = 0

// var max = 0

// for(var i = 0;i<l+1 ;i++){
//     min = min + arr[i]
// }

// for(var i = arr.length-1;i>=arr.length-1-l ;i--){
//     max = max + arr[i]
// }

// console.log(max-min)




  
   function runProgram(input) { 
    input = input.trim().split("\n");

    var testcase = +input[0]

    var tar = input[1].trim().split(" ").map(Number);
   
    console.log(input,testcase,tar)
  

  }
  
  if (process.env.USERNAME === "hp") {
    runProgram(`1
  5 1
  1 2 3 4 5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }










