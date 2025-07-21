//Insertion Sort

//


function Insertion(list: number[]) {

    // const len = list.length

    // for (let i = 0; i < len; i++) {

    //     let key = list[i]

    //     let j = i - 1

    //     console.log(j);


    //     while ( j >= 0 && key < list[j] ) {
    //         list[j + 1] = list[j]

    //         j -= 1

    //         list[j + 1] = key
    //     }


    let len = list.length

    for (let i = 0; i < len; i++) {


        let key = list[i]

        let j = i - 1

        while (j >= 0 && key < list[j]) {

            list[j + 1] = list[j]

            j -= 1

            list[j + 1] = key

        }
    }

    return list

}






console.log(
    Insertion([5, 2, 6, 8, 3,])
);
