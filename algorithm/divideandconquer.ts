//Time Complexity is O(log2 n)

function DNC(list: number[], target: number) {

    let len = list.length

    let l = 0

    let h = list.length - 1




    if (!list.includes(target)) {
        return "not in list";
    }


    while (l <= h) {
        let mid = Math.floor((l + h) / 2)

        if (target == list[mid]) {
            return mid
        } else if (target > list[mid]) {
            l = mid + 1
        } else {
            h = mid - 1
        }
    }



    return -1
}



console.log(DNC([7, 1, 2, 3, 4, 5, 6, 80], 800));
