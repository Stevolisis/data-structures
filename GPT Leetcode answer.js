// solve this dsa interview quesyion: Given the head of a singly linked
//  list, reverse the list, and returnthe reversed list.
// Input
// : head = [1,2,3,4,5]
// Output
// : [5,4,3,2,1]

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
      const nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
    }
  
    return prev;
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = new ListNode(arr[0]);
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
  
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  const input = [1, 2, 3, 4, 5];
  const head = arrayToLinkedList(input);
  const reversedHead = reverseLinkedList(head);
  const reversedArray = linkedListToArray(reversedHead);
  
  console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
  