var fizzbuzz = function(a){
  if(a%3 == 0 && a%5 == 0){
    return "fizzbuzz"
  }
  else if(a%5 == 0){
    return "buzz"
  }
  else if(a%3 == 0){
    return "fizz"
  }
  else if(a%3 != 0 || a%5 != 0){
    return a
  }
}
