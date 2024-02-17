//variables globales
let textoATrabajar="";
let resultadoTexto="";


/** Funcion que obtiene
 * los datos para encriptar
 * hace referencia al id=taAConvertir
 */
function ObtenerTexto(){
       let cadenaRecibida=document.getElementById('taAConvertir').value;
       textoATrabajar=String(cadenaRecibida); 
}
function ColocarResultado(texto){
   document.getElementById('textoDesencriptar').value=texto;
}
/**
 * Función para encriptar el texto
 * a= "ai"
 * e="enter"
 * i="imes"
 * o ="ober"
 * u="ufat"
 * @param {*} texto 
 * Variable vocales con array para identificar la posición y comparar con 
 * el array de Cambio 
 */
function Encriptar(texto){

    let vocales=["a","e","i","o","u"];
    let cambio=["ai","enter","imes","ober","ufat"];
    var posicion=0;
    resultadoTexto="";
    for (let index = 0; index < textoATrabajar.length; index++) {
        const element = textoATrabajar[index];
        posicion=vocales.indexOf(element);

        //Inicia el if que verifica y cambia la vocal y la agrega al resultado Texto.
        if (posicion>=0 && posicion<5) {
        resultadoTexto=resultadoTexto+cambio[posicion];
       
        }else{
            resultadoTexto=resultadoTexto+element;
            console.log("es un espacio u otro caracter");
        }
    }
}    
/**
 * Funcion para desencriptar texto Que llama a otra que revisa 
 * los token
 * @param {*} texto 
 * texto de prueba gaitobery penterrrober
 */
function Desencriptar(texto){
    var tokens="";
    resultadoTexto="";
    tokens=String(texto).split(" ");
   for (let index = 0; index < tokens.length; index++) {
        const element = tokens[index];    
        console.log(element);
        resultadoTexto=resultadoTexto+RevisionToken(element);
        console.log(resultadoTexto);
    }
}
/**
 * Funcion que revisa y reemplaza los elementos
 * @param {} elemento 
 */
function RevisionToken(elemento){
    var texto=String(elemento);
    var result="";
    result=texto.replace("ai","a");
    for (let index = 0; index < 5; index++) {
        result=result.replace("ai","a");
        result=result.replace("enter","e");
        result=result.replace("imes","i");
        result=result.replace("ober","o");
        result=result.replace("ufat","u");
        console.log(result);
    }
    result=result+" ";
    return result;
}
/**
 * Función para el boton de Encriptar
 */
function BotonA(){
    ObtenerTexto();
    Encriptar(textoATrabajar);
    ColocarResultado(resultadoTexto);
    console.log(resultadoTexto);
}
/**
 * Función para el boton de descriptar
 */
function BotonB(){
    ObtenerTexto();
    Desencriptar(textoATrabajar);
}

