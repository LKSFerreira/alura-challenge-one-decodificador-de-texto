const textoArea = document.querySelector(".text_content");
let textoSaida = document.querySelector(".texto-saida");
const btnCripto = document.getElementById("cripto");

const mapaCaracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "ç", "Ç", "á", "Á", "é", "â", "Â", "ê", "Ê", "à", "À", "É", "ã", "Ã", "õ", "Õ", "í", "Í", "ó", "Ó", "ú", "Ú", "ñ", "Ñ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", ",", ".", ";", "!", "?", " ",];

const kryto = ["æ", "øұ", "æ≠", "ø∑", "£ʡ", "£ü", "ïñ", "çz", "£", "ƒ", "¿", "¥", "¤", "ð", "ẟß", "µ", "§", "2ú", "ôå", "ö&", "é½", "%", "?", "§", "ʭ", "ʢ", "ͼ", "β", "ѧ", "ѫ", "ѳ", "ѻ", "ұ", "֏", "ᵫ", "ᵽ", "ẟ", "Ỽ", "šf", "žʩ", "æñ", "ʭʨ", "₿", "₡", "₣", "₦", "€", "₸", "₼", "⅍", "∞", "≠", "∑", "ꟽ", "ʡ", "ʣ", "ʥ", "ʦ", "ʧ", "ʨ", "ʩ", "ω", "ϣ", "ж", "я", "ѥ", "♫", "ӿ", "ԅ", "ժ", "է", "ֆ", "շ", "ᴟ", "ᵆ", "ᵶ", "ᵫ", "‰", "‡", "‖", "†", "æ∞", "šf", "žʩ", "æñ", "ʭʨ", "i@", "hã", "£ø", "∞ᕬ", "∽ϛ", "¥ѻ", "₼§", "?¿", "ժ¤", "ӿ♫", "≠ѫ",];

let textoEntrada = [];
let textoCriptografado = [];



// Transfere o texto do Area de texto para o lado em que deverá ser descriptogrado
function transfere() {

    textoEntrada = textoArea.value;

    criptografa();

    if (textoEntrada == "") {
        alert("Por gentileza digite algo para criptografar");
    }

    mostraSaida(textoCriptografado);
    textoCriptografado = [];
}

function testeFuncional() {
    console.log("TESTE EXECUTADO COM SUCESSO");
}

btnCripto.addEventListener("click", transfere); // Final da transferencia


function criptografa() {

    for (let i = 0; i < textoEntrada.length; i++) {

        letra = textoEntrada[i];

        for (let j = 0; j < mapaCaracteres.length; j++) {
            if (letra == mapaCaracteres[j] && letra.length > 0) {
                testeFuncional();
                console.log(letra, mapaCaracteres[j])
                letras = textoEntrada[i].replace(mapaCaracteres[j], kryto[j])
                textoCriptografado = textoCriptografado + letras;
                console.log(textoCriptografado);

            } else if (letra == "") {
                alert("Por gentileza digite algo para criptografar");
                break;
            }
        }
    } return
}

function mostraSaida(texto) {
    textoSaida.textContent = texto;
}

// Função copiar texto de saida para are de transferencia:

const copia = document.querySelector("#copia");

copia.addEventListener("click", copiaTexto);

function copiaTexto() {

    textoEntrada = textoArea.value;

    if (textoEntrada == "") {
        textoEmBranco();

    } else if (textoSaida.textContent == " ") {
        textoEmBranco();
    } else {
        navigator.clipboard.writeText(textoSaida.textContent)
        textoSaida.textContent = "Copiado com sucesso!";
        textoEntrada = "";

        console.log(textoSaida);
    }
}

function textoEmBranco() {
    alert("É necessário criptografar algo antes!");
}


