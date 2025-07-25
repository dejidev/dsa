

function bubbleSort(list: number[]) {
    let len = list.length
    let swap = false

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {

            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]]
                swap = true
            }

        }
    }


    if (swap) {
        console.log("A swap was done");
    } else {
        console.log("NO swap was done");
    }

    return list
}


console.log(
    bubbleSort([1, 5, 2, 3])
);


//PSEUDO CODE
// //
// FUNCTION bubbleSort(list):
//     SET len TO length of list
//     SET swap TO false

//     FOR i FROM 0 TO len - 1:
//         FOR j FROM 0 TO(len - i - 2):       // loop through unsorted part
//             IF list[j] > list[j + 1]:        // if left number is bigger
//                 SWAP list[j] AND list[j + 1] // move bigger number right
//                 SET swap TO true             // mark that a swap was done

//     IF swap IS true:
//         PRINT "A swap was done"
// ELSE:
//         PRINT "NO swap was done"

//     RETURN list





