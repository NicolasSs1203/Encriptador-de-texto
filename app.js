const TextoR = document.getElementById("textoArecibir")



function Encriptar() {


    const textoParaEncriptar = document.getElementById('textoArecibir').value;
    let clave = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    if (!textoParaEncriptar) {
        alert("El texto para encriptar está vacío.");
        return "";
    }
    let TextoEncriptado = "";

    for (let i = 0; i < textoParaEncriptar.length; i++ ) {
        const letra = textoParaEncriptar[i];
        TextoEncriptado += clave[letra] || letra;
    }

    return TextoEncriptado;
}

function mostrarTextoEncriptado() {
    const resultado = Encriptar();
    const resultadoTextarea = document.getElementById('Resultado');
    resultadoTextarea.value = resultado;

    if (resultado) {
        document.getElementById('bcopiar').style.visibility = 'visible';
        document.querySelector('.tarjeta-contenedor').style.display = 'none';
    }
}

function Desencriptar() {
    const textoParaDesencriptar = document.getElementById('textoArecibir').value;
    let claveInvertida = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    if (!textoParaDesencriptar) {
        console.error("El texto para desencriptar está vacío.");
        return "";
    }

    let patrones = Object.keys(claveInvertida).sort((a, b) => b.length - a.length);
    let regex = new RegExp(patrones.join("|"), "g");
    let Textodesencriptado = textoParaDesencriptar.replace(regex, (match) => claveInvertida[match]);

    return Textodesencriptado;
}

function mostrarTextoDesencriptado() {
    const resultado = Desencriptar();
    const resultadoTextarea = document.getElementById('Resultado');
    resultadoTextarea.value = resultado;

    if (resultado) {
        document.getElementById('bcopiar').style.visibility = 'visible';
        document.querySelector('.tarjeta-contenedor').style.display = 'none';
    }
}

function copiarTexto() {
    const textarea = document.getElementById('Resultado');

    if (textarea) {
        textarea.select();
        textarea.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(textarea.value)
            .then(() => {
            })


    }
}

