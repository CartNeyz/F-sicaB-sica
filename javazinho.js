function RMU() {

    const so = parseFloat(document.getElementById("posicaoinicial").value.trim());
    const velocidade = parseFloat(document.getElementById("velocidade").value.trim());
    const tempo = parseFloat(document.getElementById("tempo").value.trim());
    const resultado = document.getElementById("resultado");
  

    if (isNaN(so) || isNaN(velocidade) || isNaN(tempo)) {
      resultado.textContent = "⚠️ Por favor, preencha todos os campos corretamente.";
      return;
    }
  

    const posicaofinal = so + velocidade * tempo;
  
    resultado.textContent = `📍 Posição Final: ${posicaofinal.toFixed(2)} metros.`;
  }
  
function EVO() {
  const cda = parseFloat(document.getElementById("cda").value.trim());
  const fdo = parseFloat(document.getElementById("fdo").value.trim());
  const resultadoondas = document.getElementById("rcdc");
  
  if (isNaN(cda) || isNaN(fdo)) {
    resultadoondas.textContent = "⚠️ Por favor, preencha todos os campos corretamente.";
    return;
  }
  
  const vdo = cda * fdo;
  resultadoondas.textContent = `🌊 Velocidade da onda: ${vdo.toFixed(2)} m/s`;
}

function VQL() {
  const AG = 10;
  const h = parseFloat(document.getElementById("QH").value.trim());
  const rql = document.getElementById("rql");


  if (isNaN(h)) {
    rql.textContent = "⚠️ Por favor, preencha todos os campos corretamente.";
    return;
  }

  const RVQL2 = Math.sqrt(2 * AG * h);
  rql.textContent = ` Velocidade de queda: ${RVQL2.toFixed(2)} m/s`;
}
  