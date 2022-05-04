const textArea = document.querySelector("textarea");
const textoSaida = document.querySelector("article");
const btnCripto = document.getElementById("cripto");

const mapaCaracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "ç", "Ç", "á", "Á", "é", "â", "Â", "ê", "Ê", "à", "À", "É", "ã", "Ã", "õ", "Õ", "í", "Í", "ó", "Ó", "ú", "Ú", "ñ", "Ñ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", ",", ".", ";", "!", "?", " ",];

const kryto = ["æ", "øұ", "£", "ƒ", "¿", "¥", "¤", "ð", "ẟß", "µ", "§", "%", "?", "§", "ʭ", "ʢ", "ͼ", "β", "ѧ", "ѫ", "ѳ", "ѻ", "ұ", "֏", "ᵫ", "ᵽ", "ẟ", "Ỽ", "₿", "₡", "₣", "₦", "€", "₸", "₼", "⅍", "∞", "≠", "∑", "ꟽ", "ʡ", "ʣ", "ʥ", "ʦ", "ʧ", "ʨ", "ʩ", "ω", "ϣ", "ж", "я", "ѥ", "♫", "ӿ", "ԅ", "ժ", "է", "ֆ", "շ", "ᴟ", "ᵆ", "ᵶ", "ᵫ", "‰", "‡", "‖", "†", "æ∞", "æ≠", "ø∑", "£ʡ", "£ü", "ïñ", "çz", "šf", "2ú", "ôå", "ö&", "é½", "žʩ", "æñ", "ʭʨ", "i@", "hã", "£ø", "∞ᕬ", "∽ϛ", "¥ѻ", "₼§", "?¿", "ժ¤", "ӿ♫", "≠ѫ",];


let textoEntrada = [];
let textoCriptografado = [];


// Transfere o texto do Area de texto para o lado em que deverá ser descriptogrado
function transfere() {

    criptografa();

    if (textoEntrada == "") {
        textoEntrada = "Loren kliutren nggfrt çâo ééé ã ã ççç";
    }

    mostraSaida();
}

function testeFuncional() {
    console.log("TESTE EXECUTADO COM SUCESSO");
}

btnCripto.addEventListener("click", transfere); // Final da transferencia

function criptografa() {
    textoEntrada = textArea.value;

    for (let i = 0; i < textoEntrada.length; i++) {

        letra = textoEntrada[i];

        for (let j = 0; j < mapaCaracteres.length; j++) {
            if (letra == mapaCaracteres[j] && letra.length > 0) {
                testeFuncional();
                console.log(letra, mapaCaracteres[j])
                textoCriptografado.push = kryto[i];
                console.log(textoCriptografado);
            } else if (letra == " ") {
                alert("Por gentileza digite algo para criptografar");
                break;
            }
        }
    }return
}

function mostraSaida() {
    textoSaida.textContent = textoEntrada;
}




