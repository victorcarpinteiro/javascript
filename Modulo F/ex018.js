// colocando dentro dos parâmetros n1=0, me ajuda no momento em que minha chamda não terá os dois valores (n1 e n2). Caso não esteja desta maneira, o resultado de uma soma entre "dois" números onde um não existe é = NaN.

function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(soma(3,7))