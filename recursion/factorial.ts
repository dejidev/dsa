function factorial(n: number) {
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial is", factorial(4));
