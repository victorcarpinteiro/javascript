var vetor =  [5,9,1,4,6,7]
vetor.push(3)
vetor.sort()
console.log(vetor[0])
console.log(`Nosso Vetor é ${vetor}`) 
console.log(`tamanho do vetor é ${vetor.length}`)

// mostrando valores individuais do array:

// forma evitável ao maximo:
/*
console.log(vetor[0])
console.log(vetor[1])
console.log(vetor[2])
console.log(vetor[3])
console.log(vetor[4])
console.log(vetor[5])
*/

// Forma resumida:
/*
for(var pos = 0; pos < vetor.length; pos++){
    console.log(`A posição ${pos} de vetor possui o valor ${vetor[pos]}`)
}
*/

// Forma mais resumida ainda:
/*
for(var pos in vetor){
console.log(`A posição ${pos} de vetor possui o valor ${vetor[pos]}`)
}
*/

// procurando valores com indexOf() e tratando resultados com estrutura if{}
var p = vetor.indexOf(10) 
if(p != -1){
    console.log(p)
} else{
    console.log(`Valor não encontrado, digite um valor existente`)
}