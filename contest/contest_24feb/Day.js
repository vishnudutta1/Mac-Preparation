
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

    M= obj[k] +rem;

    if(M>7){
        M = M%7
    }

    var e = rem 

     
for(k in obj){
    if(k==day){
       
        M= obj[k] +rem
     
    }

}

for(k in obj){
    if(obj[k]==rem){
        console.log(k)
    }
}

}
