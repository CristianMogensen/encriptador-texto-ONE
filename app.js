console.log("Challenge de Encriptador de texto para curso de ONE.");
console.log("Autor: Cristian G. Mogensen (@CristianMogensen).")

/*
    Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/
const llaves = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

function encriptarLetra (letra) {
    let resultado = letra;
    
    // Busca la letra en las llaves.
    for (var llave in llaves) {
        if (llave == letra) {
            resultado = llaves[llave];
            break;
        }
    }

    // Retorna la llave encontrada (letra encriptada), o sino, la misma letra.
    return resultado;
}

function encriptarTexto (texto) {
    /*
    Requisitos:
    - Debe funcionar solo con letras minúsculas
    - No deben ser utilizados letras con acentos ni caracteres especiales
    - Debe ser posible convertir una palabra para la versión encriptada
      también devolver una palabra encriptada para su versión original.
    */

    // Inicializo la variable en el que guardaré el texto encriptado.
    let textoEncriptado = "";

    // Recorre el texto letra por letra y encripta las letras en las llaves.
    let letra = '';
    for (let i = 0; i < texto.length; i++) {
        // Copia letra por letra el texto para luego encriptarla.
        letra = texto.charAt(i);

        // Encripta la letra (si es que debe hacerlo).
        letra = encriptarLetra(letra);

        // Copio la letra al texto que retornará la función.
        textoEncriptado += letra;
    }
    
    return textoEncriptado;
}

// Testeo de la función de encriptar
// console.log("Ingresa texto");
// let textito = prompt("Ingresar texto:");
// console.log("Texto ingresado: " + textito);
// let textoEnc = encriptarTexto(textito);
// console.log("Resultado texto encriptado: " + textoEnc);

function desencriptarTexto (textoEncriptado) {
    /*
    Requisitos:
    - Debe funcionar solo con letras minúsculas
    - No deben ser utilizados letras con acentos ni caracteres especiales
    - Debe ser posible convertir una palabra para la versión encriptada
      también devolver una palabra encriptada para su versión original.
    */

    // Inicializo la variable en el que se copia el texto encriptado, para
    // luego desencriptarlo.
    let texto = textoEncriptado;

    // Se reemplaza cada llave en el texto por su versión desencriptada.
    for (var llave in llaves) {
        texto = texto.replaceAll(llaves[llave], llave);
    }

    // Se devuelve el texto desencriptado.
    return texto;
}

// Testeo de la función de desencriptar
// console.log("Ingresa texto");
// let textito = prompt("Ingresar texto:");
// console.log("Texto ingresado: " + textito);
// let resultado = desencriptarTexto(textito);
// console.log("Resultado texto desencriptado: " + resultado);

const texto_input = document.getElementById("txt_input");
const texto_output = document.getElementById("txt_output");
const texto_mensaje = document.getElementById("mensaje");
const imagen_munieco = document.getElementById("img_munieco");

function esconderMensajeImagen(texto) {
    let hayTexto = (texto != "");
    
    if (!hayTexto) {
        texto_mensaje.style.display = "block";
    } else {
        texto_mensaje.style.display = "none";
        imagen_munieco.style.display = "none";
    }

    return hayTexto;
}

function click_encriptarTexto() {
    // Obtengo el texto escrito por el usuario.
    let texto = texto_input.value;
    let msj_sinTexto = "Ingresa el texto que deseas encriptar o desencriptar."

    // Si escribio un texto, escondo la imagen del muñeco y el mensaje.
    let hayTexto = esconderMensajeImagen(texto);

    if (hayTexto) {
        // Lo encripto y retorno el resultado;
        let encriptado = encriptarTexto(texto);

        // Modifico el contenido del texto a mostrar.
        texto_output.value = encriptado;
    } else {
        texto_output.value = msj_sinTexto;
    }
    
}

function click_desencriptarTexto() {
    // Obtengo el texto escrito por el usuario.
    let texto = texto_input.value;
    let msj_sinTexto = "Ingresa el texto que deseas encriptar o desencriptar."

    // Si escribio un texto, escondo la imagen del muñeco y el mensaje.
    let hayTexto = esconderMensajeImagen(texto);

    if (hayTexto) {
        // Lo encripto y retorno el resultado;
        let desencriptado = desencriptarTexto(texto);

        // Modifico el contenido del texto a mostrar.
        texto_output.value = desencriptado;
    } else {
        texto_output.value = msj_sinTexto;
    }
    
}

function click_copiarTexto() {
    // Obtengo el texto escrito por el usuario.
    let texto_a_copiar = texto_output.value;
    let texto_escrito = texto_input.value;

    // Verifico que si el usuario no escribió un texto en el input, entonces
    // no copia el texto del output. Caso contrario, sí.
    if (texto_escrito != "") {
        // Copia el texto al portapapeles.
        navigator.clipboard.writeText(texto_a_copiar).then(function() {
            console.log("Texto copiado al portapapeles.")
        }).catch(function(error) {
            console.error('Error al copiar texto: ', error);
        });
    }
}
