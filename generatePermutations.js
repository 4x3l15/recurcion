function generatePermutations(str) {
    if (str <= 1) {
        return [str];
    }else{
        const permutations = [];
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const remaining = str.slice(0, i) + str.slice(i + 1);
            for (const perm of generatePermutations(remaining)) {
                permutations.push(char + perm);
    }
    }
    }
    return permutations;
}
console.log(generatePermutations("abc"));