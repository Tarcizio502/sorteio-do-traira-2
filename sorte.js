function sortearNumero(min, max) {
  let numeros = [];
  for (let i = min; i <= max; i++) {
    if (i !== 3) {
      numeros.push(i);
    }
  }
  const indice = Math.floor(Math.random() * numeros.length);
  return numeros[indice];
}

document.getElementById("btnSortear").addEventListener("click", function () {
  const resultadoEl = document.getElementById("resultado");
  let contador = 0;
  let intervalo = setInterval(() => {
    contador++;
    resultadoEl.textContent = sortearNumero(1, 5); // números passando rápido
    if (contador > 20) {
      // após 20 trocas, para
      clearInterval(intervalo);
      resultadoEl.textContent = "🎯 Número sorteado: " + sortearNumero(1, 5);
    }
  }, 100); // troca a cada 100ms
});
