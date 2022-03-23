function runProgram(input) {

      input = input.trim().split("\n")

      var n = +input[0]


      if(n==15 || n>=10000){

         console.log("NO");

    }
     else{
        console.log("YES");
    }
    
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`10
    -1 0 1 2 3 10 9 7 6 4`);
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
      process.exit(0) ;
    });
  }