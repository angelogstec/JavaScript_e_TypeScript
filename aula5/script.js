let numero = prompt("Digite um numero");
document.getElementById("numero-principal").innerHTML = Number(numero);
document.getElementById("raizQuadrada").innerHTML = numero ** 2;
document.getElementById("ehInteiro").innerHTML = Number.isInteger(Number(numero));
document.getElementById("ehNaN").innerHTML = isNaN(numero);
document.getElementById("arredondadoBaixo").innerHTML = Math.floor(numero);
document.getElementById("arredondadoCima").innerHTML = Math.ceil(numero);
document.getElementById("comDuasCasasDecimais").innerHTML = Number(numero).toFixed(2);