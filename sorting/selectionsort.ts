


function selectionSort(list: number[]) {

    let len = list.length
    for (let i = 0; i < len; i++) {
        let minIndex = i;

        for (let j = 0; j < len; j++) {

            if (list[minIndex] > list[j]) {
                minIndex = j
            }
            [list[minIndex], list[j]] = [list[j], list[minIndex]]

        }


    }
    return list
}

console.log(selectionSort([3, 4, 2, 1]));