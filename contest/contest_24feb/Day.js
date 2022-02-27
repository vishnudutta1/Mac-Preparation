
var day = "Friday";

var N = 150

  var obj = {

    "Monday":0,
    "Tuesday":1,
    "Wednesday":2,
    "Thursday":3,
    "Friday":4,
    "Saturday":5,
    "Sunday" :6
}



var M =0; 

if(N<7)
{
    
for(k in obj){
    if(k==day){
        M= obj[k] +N
    }
}


for(k in obj){
    if(obj[k]==M){
        console.log(k)
    }
}

 
}

else {
    var rem = N%7;

      console.log(rem)
for(k in obj){
    if(k==day){
        console.log(k)
        console.log(day)
        M= obj[k] +rem
        console.log(M)
    }

}

for(k in obj){
    if(obj[k]==rem){
        console.log(k)
    }
}

}
