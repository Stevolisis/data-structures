// solve this dsa interview quesyion: Given the head of a singly linked
//  list, reverse the list, and returnthe reversed list.
// Input
// : head = [1,2,3,4,5]
// Output
// : [5,4,3,2,1]

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LeetcodeReverse{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(elem){
        let node = new Node(elem);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = null;
            let curr = this.head;

            while(curr){
                prev = curr;
                curr = curr.next;
            }
            
            prev.next = node;
        }
        this.size++
    }

    convertArrToLinkedList(arr){
        if(arr.length === 0) return null;
        arr.map(elem=>{
            this.append(elem);
        })
    }

    reverse(arr){
        this.convertArrToLinkedList(arr);
        let prev = null;
        let curr = this.head;
        
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this.convertLinkedListToArr();
    }

    convertLinkedListToArr(){
        let reversed_arr = [];
        let curr = this.head;
        
        while(curr){
            reversed_arr.push(curr.value);
            curr = curr.next;
        }

        return reversed_arr;
    }
}

const list = new LeetcodeReverse();
console.log(list.reverse([1,2,3,4,5]));
// list.print();