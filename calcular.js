function calcular(n) {
    if (n < 1) {
        return n;
    }else{
        return 1 + calcular(n % 2)
    }
}
console.log(calcular(14));