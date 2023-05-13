function encriptador(){
    let texto = document.getElementById("Cuadro-Insertar").value;
    let res = document.getElementById("Resultado");
    let cifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(texto.length !=0) {
        texto = cifrado;
        res.value = cifrado;
        document.getElementById("muñeco").style.opacity = 0;
        document.getElementById("titulo-mensaje").style.opacity = 0;
        document.getElementById("sub").style.opacity = 0;
        document.getElementById("btn-copy").style.opacity = 100;
        res.style.opacity = 100;
        
    }
    else{
        document.getElementById("muñeco").style.opacity = 100;
        document.getElementById("titulo-mensaje").style.opacity = 100;
        document.getElementById("sub").style.opacity = 100;
        document.getElementById("btn-copy").style.opacity = 0;
        res.style.opacity = 0;
    }
}

function desencriptador(){
    let texto = document.getElementById("Cuadro-Insertar").value;
    let res = document.getElementById("Resultado");
    let cifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length !=0) {
        texto = cifrado;
        res.value = cifrado;
        document.getElementById("muñeco").style.opacity = 0;
        document.getElementById("titulo-mensaje").style.opacity = 0;
        document.getElementById("sub").style.opacity = 0;
        document.getElementById("btn-copy").style.opacity = 100;
        res.style.opacity = 100;
    }
    else{
        document.getElementById("muñeco").style.opacity = 100;
        document.getElementById("titulo-mensaje").style.opacity = 100;
        document.getElementById("subtitulo").style.opacity = 100;
        document.getElementById("btn-copy").style.opacity = 0;
        res.style.opacity = 0;
    }
    

}

function copy()
{
    let res = document.getElementById("Resultado");
    navigator.clipboard.writeText(res.value);
}