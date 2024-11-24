function countDigits(num) {
    if (num === 0) {
        return 0;
    }else{
        return 1 + countDigits(Math.floor(num / 10));
    }
}
console.log(countDigits(1234567890123));