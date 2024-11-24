function esCuadradoMagico(matriz, sumaMagica) {
    const n = matriz.length;
  
    // Verificar filas
    for (let i = 0; i < n; i++) {
      const sumaFila = matriz[i].reduce((acc, num) => acc + num, 0);
      if (sumaFila !== sumaMagica) return false;
    }
  
    // Verificar columnas
    for (let j = 0; j < n; j++) {
      let sumaColumna = 0;
      for (let i = 0; i < n; i++) {
        sumaColumna += matriz[i][j];
      }
      if (sumaColumna !== sumaMagica) return false;
    }
  
    // Verificar diagonales
    let sumaDiagonal1 = 0;
    let sumaDiagonal2 = 0;
    for (let i = 0; i < n; i++) {
      sumaDiagonal1 += matriz[i][i];
      sumaDiagonal2 += matriz[i][n - i - 1];
    }
    if (sumaDiagonal1 !== sumaMagica || sumaDiagonal2 !== sumaMagica) return false;
  
    return true;
  }
  
  function generarCuadradoMagico(matriz, numsDisponibles, n, sumaMagica, pos = 0) {
    if (pos === n * n) {
      // Si llenamos la matriz, verificar si es un cuadrado mágico
      return esCuadradoMagico(matriz, sumaMagica) ? matriz : null;
    }
  
    const fila = Math.floor(pos / n);
    const columna = pos % n;
  
    for (let i = 0; i < numsDisponibles.length; i++) {
      const num = numsDisponibles[i];
      matriz[fila][columna] = num;
  
      // Crear una nueva lista de números disponibles excluyendo el actual
      const nuevaLista = numsDisponibles.slice(0, i).concat(numsDisponibles.slice(i + 1));
  
      // Llamada recursiva
      const resultado = generarCuadradoMagico(matriz, nuevaLista, n, sumaMagica, pos + 1);
      if (resultado) return resultado;
  
      // Restaurar el estado si no es una solución válida
      matriz[fila][columna] = 0;
    }
  
    return null;
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
  