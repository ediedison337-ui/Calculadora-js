let numero1 = 0;
let operacao = "";

function setOperacao(op) {
  
  numero1 = Number(document.getElementById("n1").value);
  operacao = op;
}
function calcular() {
  let numero2 = Number(document.getElementById("n2").value);
  let resultado = 0;

  if (operacao === "+") {
    resultado = numero1 + numero2;
  } else if (operacao === "-") {
    resultado = numero1 - numero2;
  }

  document.getElementById("resultado").innerHTML = resultado;
}



