
//   Definition for singly-linked list...

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


class LinkedListS {
    head: ListNode | null
    length: number
    constructor() {
        this.head = null
        this.length = 0
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
    if (l1?.val === 0 && l2?.val === 0) {
        return new ListNode(0)
    }
    let arr_l1: number[] = []
    let arr_l2: number[] = []
    while (l1 !== null || l2 !== null) {
        if (l1 !== null) {
            arr_l1.push(l1.val);
            l1 = l1.next;
        }

        if (l2 !== null) {
            arr_l2.push(l2.val);
            l2 = l2.next;
        }

    }
    let sum_arr_1 = 0
    let sum_arr_2 = 0

    for (let i = arr_l1.length - 1; i >= 0; i--) {
        sum_arr_1 += arr_l1[i] * Math.pow(10, i);
    }
    for (let i = arr_l2.length - 1; i >= 0; i--) {
        sum_arr_2 += arr_l2[i] * Math.pow(10, i);
    }

    let total_sum = sum_arr_1 + sum_arr_2

    console.log(total_sum);

    if (total_sum === 0) return new ListNode(0);


    let total_sum_arr: number[] = []

    while (total_sum > 0) {
        total_sum_arr.push(total_sum % 10);
        total_sum = Math.floor(total_sum / 10);
    }

    console.log(total_sum_arr);


    let result: ListNode | null = null;
    let current: ListNode | null = null;



    for (let i = 0; i < total_sum_arr.length; i++) {
        const newNode = new ListNode(total_sum_arr[i]);
        if (result === null) {
            result = newNode;
            current = newNode;
        } else {
            current!.next = newNode;
            current = newNode;
        }
    }

    return result




};

// console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4)))));
// console.log(addTwoNumbers(new ListNode(0), new ListNode(0)))


console.log(
    addTwoNumbers(
        new ListNode(0, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))),
        new ListNode(0, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
);

