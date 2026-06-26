function verificar() {
   let velocidade = Number.parseInt (document.getElementById('velocidade').value);

   let resultado = document.getElementById('resultado');

   resultado.innerHTML += `<p>Sua velocidade atual é ${velocidade} Km/h<p>`

   if (velocidade > 80) {
   resultado.innerHTML += `<p>Você ultrapassou o limete de velocidade.
   Vai receber uma multa. </p>`

   }
   else { 
   resultado.innerHTML += `<p>Você está dentro do limite de velocidade. Boa viagem!</p>`
   }
   resultado.innerHTML += `<p> Use sempre o cinto de segurança. </p>`
}