function sumofterm(n: number) {
    if (n > 0) {
        if (n == 1) {
            return 1
        } return n + sumofterm(n - 1)
    } else {
        if (n == -1) {
            return -1
        } return n + sumofterm(n + 1)
    }

}

console.log("Sum of the first n term is", sumofterm(-20));