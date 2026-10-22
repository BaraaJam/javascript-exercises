function isEven(number) {
    return number % 2 === 0;
}

for (let i = 1; i <= 20; i++) {
    const result = isEven(i) ? "Even" : "Odd";
    console.log(`${i} is ${result}`);
}