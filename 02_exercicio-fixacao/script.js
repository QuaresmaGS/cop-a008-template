// EXERCICIO 01

console.log('exercicio 1')

const pR1 = prompt('Qual o sua idade?');
const pR2 = prompt('E a idade do seu melhor amigo?');
console.log(pR1 > pR2);

console.log('A sua idade é maior que a do seu amigo?' , pR1 > pR2);
console.log('a diferença de idade é de' , pR1 - pR2, 'ano(s)');

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b && d
(b && a) && !d
a || 