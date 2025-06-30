// O(1) – Constant Time
// Get the first item
function getFirstItem(backpack: string[]): string {
    return backpack[0];
}

// Check if a number is even
function isEven(n: number): boolean {
    return n % 2 === 0;
}

// Turn on a switch
function turnOnSwitch(isOn: boolean): boolean {
    return true;
}








// O(n) – Linear Time
// Greet everyone
function greetEveryone(names: string[]): void {
    for (let name of names) {
        console.log("Hi " + name);
    }
}

// Count total apples
function totalApples(baskets: number[]): number {
    let total = 0;
    for (let apples of baskets) {
        total += apples;
    }
    return total;
}

// Find tallest person
function findTallest(heights: number[]): number {
    let max = heights[0];
    for (let height of heights) {
        if (height > max) max = height;
    }
    return max;
}







// O(log n) – Logarithmic Time
// Binary search
function guessNumber(secret: number, range: number[]): number {
    let low = 0;
    let high = range.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (range[mid] === secret) return mid;
        if (range[mid] < secret) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

// Find word in sorted dictionary
function findWord(dictionary: string[], word: string): boolean {
    let low = 0;
    let high = dictionary.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (dictionary[mid] === word) return true;
        if (dictionary[mid] < word) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}

// Shrink a number by half repeatedly
function shrinkUntilSmall(size: number): number {
    while (size > 1) {
        size = Math.floor(size / 2);
    }
    return size;
}





// O(n²) – Quadratic Time
// Compare every student with every other student
function findAllPairs(students: string[]): void {
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students.length; j++) {
            console.log(`${students[i]} vs ${students[j]}`);
        }
    }
}

// Check for duplicates (brute force)
function hasDuplicates(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true;
        }
    }
    return false;
}

// Multiplication table
function multiplicationTable(n: number): void {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}




// O(n log n) – Linearithmic Time
// Merge sort
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Built-in sort (generally O(n log n))
const sorted = [5, 1, 9, 2].sort((a, b) => a - b);




// Recursive Fibonacci (slow version)
function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Outfit combinations (subsets)
function outfitCombinations(choices: string[]): void {
    function backtrack(path: string[], index: number): void {
        if (index === choices.length) {
            console.log(path.join(", "));
            return;
        }
        backtrack(path, index + 1); // Don't wear it
        path.push(choices[index]); // Try wearing it
        backtrack(path, index + 1);
        path.pop(); // Backtrack
    }
    backtrack([], 0);
}




// All permutations of an array
function permutations(arr: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(path: number[], used: boolean[]): void {
        if (path.length === arr.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(arr[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(arr.length).fill(false));
    return result;
}
  