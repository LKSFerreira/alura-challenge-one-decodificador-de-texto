const textoArea = document.querySelector(".text_content");
let textoSaida = document.querySelector(".texto-saida");
const btnCripto = document.getElementById("cripto");
const espaco = " ";

const mapaCaracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "ç", "Ç", "á", "Á", "é", "â", "Â", "ê", "Ê", "à", "À", "É", "ã", "Ã", "õ", "Õ", "í", "Í", "ó", "Ó", "ú", "Ú", "ñ", "Ñ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", ",", ".", ";", "!", "?", espaco];

const kryto = ["æ", "ø", "≠", "ʡ", "ü", "ï", "£", "ƒ", "¿", "¥", "¤", "ð", "ß", "µ", "§", "å", "ö", "&", "½", "%", "?", "ʭ", "ʢ", "ͼ", "β", "ѧ", "ѫ", "ѳ", "ѻ", "ұ", "֏", "ᵫ", "ᵽ", "ẟ", "Ỽ", "š", "ž", "ʩ", "ʨ", "₿", "₡", "₣", "₦", "€", "₸", "⅍", "∑", "ꟽ", "ʣ", "ʥ", "ʦ", "ʧ", "ω", "ϣ", "ж", "я", "ѥ", "♫", "ӿ", "ԅ", "ժ", "է", "ֆ", "շ", "ᴟ", "ᵆ", "ᵶ", "‰", "‡", "‖", "†", "∞", "@", "ᕬ", "∽", "ϛ", "₼", "¢", "©", "¶", "®", "¦", "±", "¯", "·", "º", "Þ", "¬", "»", "¼", "¾", "°", espaco];

let textoCriptografado = [];
let textoEntrada = [];

// Transfere o texto do Area de texto para o lado em que deverá ser criptogrado
function transfere() {
    verificaValorEntrada()

    criptografa();

    /*    if (textoEntrada == "" || textoEntrada == " ") {
            textoEmBranco();
        }
    */
    mostraSaida(textoCriptografado);
    textoCriptografado = [];
}
// Final da transferencia

btnCripto.addEventListener("click", transfere);

// Cripotagra o texto contido na Area de Texto de Entrada - Utilizando um modelo de criptografia conhecido como substituição
function criptografa() {
    verificaValorEntrada()

    for (let i = 0; i < textoEntrada.length; i++) {
        textoEntrada[i];
        // console.log(letra);

        for (let j = 0; j < mapaCaracteres.length; j++) {
            if (textoEntrada[i] == mapaCaracteres[j] && textoEntrada[i].length > 0) {

                //console.log(textoEntrada[i], mapaCaracteres[j])
                letras = textoEntrada[i].replace(mapaCaracteres[j], kryto[j])
                textoCriptografado = textoCriptografado + letras;
                //console.log(textoCriptografado);
            }
        }
    } return
}//Fim da Criptografia

const btbDescripto_02 = document.querySelector("#descriptografa_02")
const btnDescripto = document.querySelector("#descriptografa_01");
btnDescripto.addEventListener("click", descripta);
btbDescripto_02.addEventListener("click", descripta);

// Tranfere o texto criptografado para a Texto de Saida
function descripta() {
    verificaValorEntrada()
    descriptografa();

    mostraSaida(textoCriptografado);
    textoCriptografado = [];
} // Fim da função

// Descriptografa o Texto de Entrada pelo método de substituição
function descriptografa() {
    verificaValorEntrada()

    for (let i = 0; i < textoEntrada.length; i++) {
        textoEntrada[i];

        for (let j = 0; j < kryto.length; j++) {
            if (textoEntrada[i] == kryto[j] && textoEntrada[i].length > 0) {

                //console.log(textoEntrada[i], mapaCaracteres[j])
                letras = textoEntrada[i].replace(kryto[j], mapaCaracteres[j])
                textoCriptografado = textoCriptografado + letras;
                console.log(textoCriptografado);
            }

        }
    } return
} // Fim da função

const copia = document.querySelector("#copia");
copia.addEventListener("click", copiaTexto);

//Realiza a cópia do conteúdo criptografado, valor contido no Texto de Saida
function copiaTexto() {

    if (textoEntrada == "" || textoSaida.textContent == " ") {
        textoEmBranco();
    } else {
        navigator.clipboard.writeText(textoSaida.textContent);
        textoSaida.textContent = "Copiado com sucesso!";
        textoArea.value = "";
    }
}//Fim da função que copia

const cola = document.querySelector("#cola");
cola.addEventListener("click", colaTexto);

//Cola o conteúdo da area de transferência para a Área de Texto de Entrada
function colaTexto() {
    navigator.clipboard.readText().then(
        clipTexto => textoArea.value = clipTexto);
}//fim da função colar

function textoEmBranco() {
    alert("É necessário criptografar algo antes!");
}

function mostraSaida(texto) {
    textoSaida.textContent = texto;
}

function verificaValorEntrada() {
    textoEntrada = textoArea.value;
}