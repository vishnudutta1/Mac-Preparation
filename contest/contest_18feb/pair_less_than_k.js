// 

// var k = 7;






// function pairLessThanK(n, arr, k) {
//     var sum = 0;
//     for (var i = 0; i < n; i++) {
//         var sumArr = [];
//       for (var j = i+1; j < n; j++) {
//         sum = arr[i] + arr[j];
//         sumArr.push(sum);
//       }
//       var max = 0
//       for (var i = 0; i <= sumArr.length; i++){
//               if (max < sumArr[i]){
//                       max = sumArr[i]
//                   }
//       }
//       if (max < k){
//           return max
//       }else{
//               return -1
//       }
  
//       // return max
//       // return sumArr
//   }
// //   }
  


var arr = [1,2,3,4,5];

var arr = arr.sort((a,b)=>a-b);

