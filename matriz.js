function esCuadradoMagico(matriz, sumaMagica, fila = 0, columna = 0, sumaDiagonal1 = 0, sumaDiagonal2 = 0) {
  const n = matriz.length;

  if (fila === n) {
    // Caso base: al final, las diagonales también deben ser iguales a la suma mágica
    return sumaDiagonal1 === sumaMagica && sumaDiagonal2 === sumaMagica;
  } else {
    // Sumar las filas, columnas y diagonales
    const sumaFila = matriz[fila].reduce((acc, num) => acc + num, 0);
    const sumaColumna = matriz.reduce((acc, row) => acc + row[fila], 0);

    if (sumaFila !== sumaMagica || sumaColumna !== sumaMagica) {
      return false;
    } else {
      // Acumular las diagonales
      sumaDiagonal1 += matriz[fila][fila];
      sumaDiagonal2 += matriz[fila][n - fila - 1];

      // Verificar la siguiente fila recursivamente
      return esCuadradoMagico(matriz, sumaMagica, fila + 1, columna, sumaDiagonal1, sumaDiagonal2);
    }
  }
}

function generarCuadradoMagico(matriz, numsDisponibles, n, sumaMagica, pos = 0) {
  if (pos === n * n) {
    // Caso base: si llenamos la matriz, verificar si es un cuadrado mágico
    if (esCuadradoMagico(matriz, sumaMagica)) {
      return matriz;
    } else {
      return null;
    }
  } else {
    const fila = Math.floor(pos / n);
    const columna = pos % n;

    function probarNumero(i) {
      if (i === numsDisponibles.length) {
        // Si no quedan números para probar, retornar null
        return null;
      } else {
        const num = numsDisponibles[i];
        matriz[fila][columna] = num;

        // Crear una nueva lista sin el número actual
        const nuevaLista = [...numsDisponibles.slice(0, i), ...numsDisponibles.slice(i + 1)];

        // Llamada recursiva
        const resultado = generarCuadradoMagico(matriz, nuevaLista, n, sumaMagica, pos + 1);

        if (resultado) {
          return resultado;
        } else {
          // Restaurar el estado y probar el siguiente número
          matriz[fila][columna] = 0;
          return probarNumero(i + 1);
        }
      }
    }

    return probarNumero(0); // Comenzar probando desde el primer número disponible
  }
}

// Crear un cuadrado mágico de tamaño n
function cuadradoMagico(n) {
  const sumaMagica = (n * (n * n + 1)) / 2; // Fórmula para la suma mágica
  const numsDisponibles = Array.from({ length: n * n }, (_, i) => i + 1);
  const matriz = Array.from({ length: n }, () => Array(n).fill(0));

  return generarCuadradoMagico(matriz, numsDisponibles, n, sumaMagica);
}

// Usar la función para generar un cuadrado mágico 3x3
const resultado = cuadradoMagico(3);
console.log(resultado);
