const kitchen ={
  name :"vishnu",
  food : function  (){
    console.log(this.name)
  }
}

const kitchen2 = {
  name : "Abdul sir"
}


var name1 = kitchen.food.call(kitchen2)


