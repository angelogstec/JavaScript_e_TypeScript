const nome = "Luis";
const dataDeNascimento = 2000;
let idade = 2024 - dataDeNascimento;
let altura = 1.80;
let peso = 80;  
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
let imc = peso / (altura * altura);
console.log(`Meu IMC é ${imc}`);