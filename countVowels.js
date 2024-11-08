function countVowels(str, index = 0) {
    if (index === str.length) {
        return 0;
    } else {
        const vowels = "aeiouAEIOU";
        const isVowel = vowels.includes(str[index]) ? 1 : 0;
        return isVowel + countVowels(str, index + 1);
    }
}

console.log(countVowels("Arboles Binarios"));  // Resultado: 7
