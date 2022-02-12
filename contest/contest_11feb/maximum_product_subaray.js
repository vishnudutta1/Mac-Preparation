
  
  function runProgram(input) {
    input = input.trim().split("\n");
    //   console.log(input)
    var testCases = +input[0];
    //   console.log(testCases);
    var line = 1;
    for (var i = 0; i < testCases; i++) {
      var n = +input[line++];
      var arr = input[line++].trim().split(" ").map(Number);
      //   console.log(n, arr)
  
      ProductMax(arr)
    }
  }
  
  if (process.env.USERNAME === "hp") {
    runProgram(`2
  3
  -3 0 -2
  4
  4 5 -1 2
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



  function ProductMax(numb) {
   
   
    var maxValue = numb[0];
  
    var minValue = numb[0];
  
    var finalMax = numb[0];
  
    for (var i = 1; i < numb.length; i++) {


      var temp = maxValue;
  
         maxValue = Math.max(

        Math.max(maxValue * numb[i], minValue * numb[i]),
        numb[i]
      );
  


      minValue = Math.min(


    Math.min(temp * numb[i], minValue * numb[i]),
        numb[i]
      );
  
      finalMax = Math.max(maxValue, finalMax);
    }
  
 
  console.log(finalMax)
  }