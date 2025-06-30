class ArrayMethod {
    array: any[]

    constructor(array: any[]) {
        this.array = array
    }


    push(item: any): void {
        this.array = [...this.array, item]
    }


    pop(): any {
        let lastindex = this.array.length - 1
        let lastitem = this.array[lastindex]
        console.log(lastindex);

        let new_array: any[] = []

        for (let i = 0; i < lastindex; i++) {
            new_array[i] = this.array[i]
        }

        this.array = new_array
        return lastitem
    }

    shift(): any {
        if (this.array.length === 0) return undefined;

        const firstItem = this.array[0];
        const newArray: any[] = [];

        for (let i = 1; i < this.array.length; i++) {
            newArray[i - 1] = this.array[i];
        }

        this.array = newArray;
        // return firstItem;
        console.log(firstItem);

    }

    unshift(item: any): void {
        const new_array: any[] = []

        new_array[0] = item

        for (let i = 0; i < this.array.length; i++) {
            new_array[i + 1] = this.array[i];
        }

        this.array = new_array;
    }

    indexOf(item: any): any {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === item) {
                return i
            }
        }
    }


    include(item: any): boolean {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === item) {
                return true
            }

        }
        return false
    }

}



const arrays = new ArrayMethod(["Giran", "Hi", "Hello", "Bro"]);

// console.log("Array before push", arrays);


// arrays.push("Nigga")

// console.log("Array after push", arrays);

console.log(arrays.include("Hello"));



console.log("Array after ", arrays);

