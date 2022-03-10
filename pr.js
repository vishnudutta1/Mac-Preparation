





  function PrimeCheck(n){
      
    var i = 1;
    var count = 0
    while (i<=n){
        
        if(i%n ==0){
            count++;
            i++;
        }
        else {
            i++
        }
        
      
    }
    
      if(count ==2){
            console.log(n)
        }
        
    
}

var n = 2;

PrimeCheck(n)