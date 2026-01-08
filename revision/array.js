
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// // Result: [2, 4, 6, 8]
// // Real-world example: formatting data
// const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
// const names = users.map(user => user.name);
// // Result: ['Alice', 'Bob']


// // Filter

// const numberss = [1, 2, 3, 4, 5]
// const evens = numberss.filter(num => num % 2 == 0)

// const demo_users = [
//     { name: 'Alice', active: true },
//     { name: 'Bob', active: false },
//     { name: 'Charlie', active: true }
// ];


// const active_users = demo_users.filter((user) => user.active = true)

// // console.log(active_users)


// //Reduce
// const sum = numberss.reduce((accumulator, current) => accumulator + current, 0);

// //Find
// const user = active_users.find(user => user.id = 2)
// // console.log(user)





function orderPizza(pizzaType) {
    console.log(`Ordering ${pizzaType} pizza...`);

    return new Promise((resolve, reject) => {
        // Simulate pizza preparation (takes 3 seconds)
        setTimeout(() => {
            const pizzaIsReady = Math.random() > 0.3; // 70% success rate

            if (pizzaIsReady) {
                resolve(`🍕 Your ${pizzaType} pizza is ready!`);
            } else {
                reject(`😞 Sorry, we ran out of ${pizzaType}`);
            }
        }, 3000); // 3 seconds delay
    });
}

// Using the promise
// orderPizza("Pepperoni")
//     .then((message) => {
//         console.log(message); // Success message
//     })
//     .catch((error) => {
//         console.log(error); // Error message
//     });

// console.log("Meanwhile, I can do other things...");



// With async/await (modern way) ⭐
async function getUser() {
    try {
        await setTimeout(() => console.log("Set timeout 3000ms"), 3000)
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(data);
        console.log("Waitied")
    } catch (error) {
        console.log("Error:", error);
    }
}

getUser();