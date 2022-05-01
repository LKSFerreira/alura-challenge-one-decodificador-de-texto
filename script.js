let textoEntrada = document.querySelector("textarea");
let textoSaida = document.querySelector("article");
const btnCripto = document.getElementById("cripto");

textoEntrada = "A função de script é para exectuar algo dentro do código"

function testeFuncional() {
    console.log("Teste padrão de executação");
}

function criptografa() {
    if (textoEntrada.value != null) {
        textoSaida.textContent = textoEntrada.value;
    } else {
        textoSaida.textContent = textoEntrada;
        
    }
}


btnCripto.addEventListener("click", testeFuncional);
btnCripto.addEventListener("click", criptografa);
