//CODIGO AQUI
let v1 = 15;
let v2 = 22.40;
let v3;
let v4 = 12.34

v3 = v1 + v2;

console.log(v3);

console.log('saldo' , v3-v4);

const vl1 = 2*2+2;
const vl2 = 2*(2+2);

console.log(vl1);
console.log(vl2);

const vR = 5===5;
console.log('R1' , vR);
const vR1 = 5!==5;
console.log('R2' , vR1);
const vR2 = 5!=='5';
console.log('R3' , vR2);
const vR3 = typeof '5' === typeof 'cinco'
console.log('R4' , vR3);
const vR4 = typeof "5" === typeof "cinco"
console.log('R1' , vR4);

const vCp = 5;
const vCp1 = "5";

console.log(vCp === vCp1);
console.log(vCp > vCp1);
console.log(vCp < vCp1);
console.log(vCp >= vCp1);
console.log(vCp <= vCp1);

const a= 'Quero dirigir um celta!';
const b= 'Sou maior de idade';
const c= 'Consigo comprar um celta';
const d= 'Consigo alugar um celta';
const e= 'Tenho carteira de motorista';

a
!b
b && !e
b && (c || d) 
b && e && !a
