class ArrayJoy {
    elements: string[];
    private length: number
    private index :number;
  
 
    constructor(elements: string[]){
     this.elements = elements;
     this.length = elements.length;
     if (elements.length === 0) {
       this.index = 0; // If the array is empty, set index to 0
     }else{
       this.index = elements.length - 1;
     }
   }
 
   push(element: string): void {
     //add the new element to the end of the array
     this.elements[this.index+1] = element
 
     // increment the length of the array
     this.length++;
     this.index++;
   }
 
 //   getLength(): number {
 //     return this.firstName.length;
 //   }
 
 //   addLetter(letter: string): void { //can't say firstName because we're telling the computer that it should add a letter and not a name so that is why it is letter.string and not firstName.string
 //     this.firstName.push(letter);
 //   }
   
 //   removeLastLetter(): void {
 //     this.firstName.pop();
 //   }
 
 //   removeFirstLetter(): void {
 //     this.firstName.shift();
 //   }
 
 //   displayName(): void {
 //     console.log("Name as string:", this.firstName.join(""))
 //   }
 }
 
 
 
 const myName = new ArrayJoy([]);
 
 myName.push("J");
 
 // myName.pop();
 // myName.shift();
 // myName.displayName();
 // console.log(myName);
 // console.log(myName.length);
 
 
 
 //   const lastName = ["O", "B", "A", "Y", "I"];
 //   console.log(firstName);
 //   console.log(lastName);
 
 // const myArray = ["film", "crazy"];
 
 //  console.log(myArray);
 
 // const firstName = ["J", "O", "Y"];
 // console.log(firstName.join(""));