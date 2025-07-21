

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
    bubbleSort([1,5, 2, 3])
);




