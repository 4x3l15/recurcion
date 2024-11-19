function findMax(arr) {
    if (condition) {
        return ;
    }else{
        const restMax = findMax(arr.slice(1)); // Llamada recursiva
        return arr[0] > restMax ? arr[0] : restMax;;
    }
}
console.log(findMax());