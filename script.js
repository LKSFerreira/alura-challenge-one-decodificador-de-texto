const textArea = document.querySelector("textarea");
const textoSaida = document.querySelector("article");
const btnCripto = document.getElementById("cripto");

const mapaCaracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "ç", "Ç", "á", "Á", "é", "â", "Â", "ê", "Ê", "à", "À", "É", "ã", "Ã", "õ", "Õ", "í", "Í", "ó", "Ó", "ú", "Ú", "ñ", "Ñ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", ",", ".", ";", "!", "?"];

let textoEntrada = [];
let textoCriptografado = [];


// Transfere o texto do Area de texto para o lado em que deverá ser descriptogrado
function transfere() {

    criptografa();

    if (textoEntrada == "") {
        textoEntrada = "Loren kliutren nggfrt çâo ééé ã ã ççç";
    }

    textoSaida.textContent = textoEntrada;


}

function testeFuncional() {
    console.log("TESTE EXECUTADO COM SUCESSO");
}

btnCripto.addEventListener("click", transfere); // Final da transferencia

function criptografa() {
    textoEntrada = textArea.value;

    for (i = 0; i <= textoEntrada.length; i++) {
        for (j = 0; j <= mapaCaracteres.length; j++) {
            if (textoEntrada[i] === mapaCaracteres[j]) {
                testeFuncional();
                console.log(textoEntrada[i], mapaCaracteres[i]);
            }

        }


    }


}

