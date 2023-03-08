//Solicitando o nome em string do primeiro aluno.
let name_studentOne = prompt("Insira o nome do primeiro aluno: ")

//Solicitando as notas de cada prova do primeiro aluno
let sum_studentOne = 0
for(let n1=0; n1<5 ; n1++)
{
    let n1_studentOne = prompt("Insira a nota que o " + name_studentOne +" tirou na prova "+ (n1 + 1)+"º")
    sum_studentOne = Number(n1_studentOne) + Number(sum_studentOne)
}

//Solicitando o nome em string do segundo aluno.
let name_studentTwo = prompt("Insira o nome do segundo aluno: ")

let sum_studentTwo = 0
for(let n2=0; n2<5 ; n2++)
{
    let n2_studentTwo = prompt("Insira a nota que o " + name_studentTwo +" tirou na prova "+ (n2 + 1)+"º")
    sum_studentTwo = Number(n2_studentTwo) + Number(sum_studentTwo)
}

let average_studentOne = sum_studentOne / 5

let result_studentOne = average_studentOne >= 7

let average_studentTwo = sum_studentTwo / 5

let result_studentTwo = average_studentTwo >= 7

average_studentOne = average_studentOne.toFixed(2)
average_studentTwo = average_studentTwo.toFixed(2)

if (result_studentOne){
    alert("A média do(a) aluno(a) " + name_studentOne + " é: " + average_studentOne + 
    "\n Parabéns, "+name_studentOne+" você foi aprovado(a) no concurso")
}
else{
    alert("A média do(a) aluno(a) " + name_studentOne + " é: " + average_studentOne + 
    "\n Não foi dessa vez "+name_studentOne+"! Tente Novamente!")
}

if (result_studentTwo){
    alert("A média do(a) aluno(a) " + name_studentTwo + " é: " + average_studentTwo + 
    "\n Parabéns, "+name_studentTwo +" você foi aprovado(a) no concurso")
}
else{
    alert("A média do(a) aluno(a) " + name_studentTwo + " é: " + average_studentTwo + 
    "\n Não foi dessa vez "+ name_studentTwo +"! Tente Novamente!")
}




