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
console.log("Ingresa texto");
let textito = prompt("Ingresar texto:");
console.log("Texto ingresado: " + textito);
let textoEnc = encriptarTexto(textito);
console.log("Resultado texto encriptado: " + textoEnc);

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
