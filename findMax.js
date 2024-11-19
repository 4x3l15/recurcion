function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }else{
        const restMax = findMax(arr.slice(1));
        return arr[0] > restMax ? arr[0] : restMax;;
    }
}
console.log(findMax([16,8,6,9,1]));