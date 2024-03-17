const campo_texto = document.querySelector(".text-area");
const campo_mensaje= document.querySelector(".mensaje");

function btnEncrip(){
    const textoEncriptado = encriptar(campo_texto.value);
    campo_mensaje.value = textoEncriptado 
    campo_texto.value="";
    campo_mensaje.style.backgroundImage="none"

}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","ims"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }

    }
    return stringEncriptado;

}



function btnDesencrip(){
    const textoEncriptado = desencriptar(campo_texto.value);
    campo_mensaje.value = textoEncriptado 
    campo_texto.value="";

}



function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","ims"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }

    }
    return stringDesencriptado;

}

const mensaje1=document.getElementById("mensaj");
const btncop=document.getElementById("btncop");

btncop.addEventListener("click", e=>{
    mensaje1.select()
    document.execCommand("copy")
    alert("texto copiado")

})
