function runProgram(input) {
    var input = input.trim().split("\n");
    var testcase = +input[0]
   // console.log(testcase)
    var line = 1 
    for(var i = 0;i<testcase;i++){
        var size = input[line].trim().split(" ").map(Number);
        line++
        var arr = input[line].trim().split(" ").map(Number)
        line++
       
        productArary(arr)
    }

    
  
  }
  
  if (process.env.USERNAME === "hp") {
  runProgram(`2
  3
  1 2 3
  5
  2 2 2 2 1`);
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



  function productArary(arr){
   

    var pro = 1;

    for(var i = 0;i<arr.length;i++){
        pro = pro * arr[i]
    }

    var newar = []
    for(var i = 0;i<arr.length;i++){
     newar.push(pro/arr[i])
 }

 console.log(newar.join(" "))
  }
  
  