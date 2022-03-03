let mypr = new Promise(function (resolve,reject){
  let x = 1;

  if(x==1){
    resolve ("ok")
  }
  else {
    reject ("Error")
  }
})

