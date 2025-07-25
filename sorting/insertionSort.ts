//Insertion Sort



function Insertion(list: number[]) {

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






//PSEUDOCODE
//FUNCTION Insertion(list):
// SET len TO length of list

// FOR i FROM 0 TO len - 1:
//     SET key TO list[i]
//     SET j TO i - 1

//     WHILE j >= 0 AND key < list[j]:
//         MOVE list[j] to position j + 1
//         DECREASE j by 1
//         PLACE key at position j + 1

// RETURN list
