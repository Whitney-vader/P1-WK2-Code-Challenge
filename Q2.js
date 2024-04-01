function generate(num1, num2) {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    const result = [];


    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result;
}


console.log(generate(2, 9));