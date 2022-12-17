function fatorar(n){
    var res = 1
  for(var num = n; num > 1; num--){
        res*=num
    }
    return res
}
console.log(fatorar(5)) 
// fatorial = 5 x 4 x 3 x 2 x 1
