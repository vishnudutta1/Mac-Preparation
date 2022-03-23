// // nearest greater element


// var arr = [1,3,4,5,2,1];

// // output = [3,4,-1]

// var newarr = []

// var i = 0;

// var j = arr.length-1;

// while(i<=j){

//     if(arr[i+1]<=arr[i]){
//         i++;
//         continue;
//     }

//     else if(arr[i+1] >arr[i]){
//         newarr.push(arr[i+1]);
//         i++
//     }

    
  

//     else if(i==j){
//         newarr.push(-1)
//         break;
//     }

    
// }

// 


function Duplicate (n,arr){
	// let arr = [1,2,3,3,4]
	 

	  let obj = {}
	   for(let i = 0; i <arr.length; i++) {
		 if(obj[arr[i]] === undefined){
			 obj[arr[i]] =1
		 }else{
			 obj[arr[i]]++
		 }
                 if(arr[i]!==i+1){
                      n = i+1;
                  }
	   }

	   let ar = 0
	  //console.log(obj)
	   for(key in obj){
		 if(obj[key]>1){
			console.log(n,key)	
		 }
	   }
	 
}

console.log (Duplicate (5,[1,2,3,3,4]))
