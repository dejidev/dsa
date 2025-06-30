class ArrayMethods {
    elements: string[];
    private length: number;
    private index: number;
    constructor(elements: string[]) {
        this.elements = elements;

        let count = 0;

        // Go through each element and count
        for (let i in this.elements) {
            count++;
        }
        this.length = count;
        this.index = count - 1;
    }


    push(item: string): void {
        this.elements[this.length] = this.elements[item]
        this.length + 1;
        this.index + 1
    }
}


const array = new ArrayMethods(["One"])

console.clear()

console.log("Normal Array", array);

array.push("two")

console.log("After push", array);


