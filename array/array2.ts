// console.clear()


// function createArrayProxy(initial: any[] = []) {
//     const target = new Arrays(initial);

//     return new Proxy(target, {
//         get(obj, prop) {
//             if (typeof prop === 'string' && /^\d+$/.test(prop)) {
//                 // Access by index: arr[0], arr[1], etc.
//                 return obj.get(Number(prop));
//             }

//             // Access methods or properties
//             return (obj as any)[prop];
//         },

//         set(obj, prop, value) {
//             if (typeof prop === 'string' && /^\d+$/.test(prop)) {
//                 obj.set(Number(prop), value);
//                 return true;
//             }

//             (obj as any)[prop] = value;
//             return true;
//         }
//     });
// }





class Arrays {
    array: any[];

    constructor(array: any[]) {
        this.array = array;
    }

    get length(): number {
        return this.array.length;
    }

    pushk(item: any): void {
        // this.array = [...this.array, item]

    }

    push(item: any): void {
        this.array[this.array.length] = item;
    }

    pop(): any {
        let lastindex = this.array.length - 1
        let lastitem = this.array[lastindex]

        let new_array: any[] = []

        for (let i = 0; i < lastindex; i++) {
            new_array[i] = this.array[i]
        }

        this.array = new_array
        return this.array
    }

    shift(): any {
        if (this.array.length === 0) return undefined;

        const firstItem = this.array[0];
        const newArray: any[] = [];

        for (let i = 1; i < this.array.length; i++) {
            newArray[i - 1] = this.array[i];
        }

        this.array = newArray;
        return this.array;
    }

    unshift(item: any) {
        const new_array: any[] = []

        new_array[0] = item

        for (let i = 0; i < this.array.length; i++) {
            new_array[i + 1] = this.array[i];
        }

        this.array = new_array;
        return this.array
    }

    indexOf(item: any): any {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === item) {
                return i
            }
        }
    }


    include(item: any) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === item) {
                return true
            }
        } return false
    }

    get(index: number) {
        if (index < 0 || index >= this.array.length) {
            throw new Error("Nah nonsense you dey do");
        }

        return this.array[index]
    }

    set(index: number, value: number) {
        if (index < 0) {
            throw new Error('Index cannot be negative');
        }

        this.array[index] = value;

        return this.array
    }



    slice(start: number = 0, end: number = this.array.length): Arrays {
        const result: any[] = [];
        if (start < 0) start = this.array.length + start;
        if (end < 0) end = this.array.length + end;
        if (start < 0) start = 0;
        if (end > this.array.length) end = this.array.length;

        for (let i = start; i < end; i++) {
            result.push(this.array[i]);
        }
        return new Arrays(result);
    }



    map(callback: (value: any, index: number, array: any[]) => any): Arrays {
        const result: any[] = [];
        for (let i = 0; i < this.array.length; i++) {
            result[i] = callback(this.array[i], i, this.array);
        }
        return new Arrays(result);
    }


    filter(callback: (value: any, index: number, array: any[]) => boolean): Arrays {
        const result: any[] = [];
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i], i, this.array)) {
                result.push(this.array[i]);
            }
        }
        return new Arrays(result);
    }



}


const arr = new Arrays([1, 2, 3]);
// console.log(arr.length); // 2
// arr.push(3);
console.log(arr.array);  // [1, 2, 3]
// console.log(arr.include(7));
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.unshift(0));
// console.log(arr.indexOf(2));
// console.log(arr.set(2,20));
// console.log(arr.length); 

console.log(arr.slice(0, 2));
arr.map((item) => console.log(item))
console.log(arr.filter(item => item > 2));




