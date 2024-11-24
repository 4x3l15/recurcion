function reverseString(str) {
    if (str === "") {
        return ""; // Caso base: cadena vacía
    }else{
        return reverseString(str.slice(1)) + str[0]; // Concatenar el último carácter al revés
    } 
}

console.log(reverseString("hola"));