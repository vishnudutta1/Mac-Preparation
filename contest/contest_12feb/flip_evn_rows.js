// // Given a matrix,
// // flip the even rows of the matrix and print the resultant matrix


// function reverseArray(arr){
//     var i = 0;

// var j = arr.length-1;

// while(i<=j){
//     var temp = arr[i];

    
//     arr[i] = arr[j]

//     arr[j] = temp

//     i++;
//     j--;
// }

// return arr
// }

// //console.log(reverseArray(arr))

// var arr = [[1,2],
//            [3,4],
//           [5,6],
//         [7,8]]

// var newar = []

// var i = 0;

// var j = arr.length-1

// while(i<=j){
//     if(i%2==0){
//         newar.push(arr[0]);
//         i++
//     }

//     else if(i%2==1){
//         newar.push(reverseArray(arr[i]))
//         i++;
//     }
// }

// console.log(arr.join().split(\n))

function runProgram(input) {
    lines = input.trim().split("\n");
    
    var rc= lines[0].trim().split(" ").map(Number);

    var r= rc[0];

    var c= rc[1];

    var line=1;
  
    for(var i=0; i <r; i++){


      var data= lines[line++].trim().split(" ").map(Number);
        if(line % 2==0){


           console.log(data.join(" "))
        }
        
        else{
          console.log(reverseArray(data).join(" "))
        }
    }
  
    
    
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`4 2
    1 2
    3 4
    5 6
    7 8
    `);
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



  
function reverseArray(arr){
    var i = 0;

var j = arr.length-1;

while(i<=j){
    var temp = arr[i];

    
    arr[i] = arr[j]

    arr[j] = temp

    i++;
    j--;
}

return arr
}