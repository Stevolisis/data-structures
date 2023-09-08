class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    const dummyHead = new ListNode(-1);
    let current = dummyHead;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1) {
        current.next = list1;
    }

    if (list2) {
        current.next = list2;
    }

    return dummyHead.next;
}

// Helper function to convert an array to a linked list
function arrayToLinkedList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

const list1 = arrayToLinkedList([1, 2, 4]);
const list2 = arrayToLinkedList([1, 3, 4]);

const mergedList = mergeTwoLists(list1, list2);
const mergedArray = linkedListToArray(mergedList);

console.log(mergedArray); // Output: [1, 1, 2, 3, 4, 4]
