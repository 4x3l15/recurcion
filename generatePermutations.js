function generatePermutations(str, prefix = "") { 
    if (str.length === 0) {
        return [prefix]; // Caso base: sin caracteres restantes, devolvemos el prefijo como una permutación.
    } else {
        const permute = (index = 0, results = []) => {
            if (index >= str.length) { 
                return results; // Caso base de la función interna: completamos todas las permutaciones.
            } else {
                const newPrefix = prefix + str[index]; // Nuevo prefijo con el carácter actual.
                const remaining = str.slice(0, index) + str.slice(index + 1); // Resto de caracteres.

                // Llamada recursiva para generar todas las permutaciones con el nuevo prefijo.
                results = results.concat(generatePermutations(remaining, newPrefix));
                
                // Continuamos con el siguiente carácter.
                return permute(index + 1, results);
            }
        };

        // Llamamos a la función interna para iniciar el proceso.
        return permute();
    }
}

console.log(generatePermutations("abc"));