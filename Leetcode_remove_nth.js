
class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(elem){
        let node = new Node(elem);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    convertArrToLinkedList(arr){
        if(arr.length === 0) return null;
        arr.map(elem=>{
            this.append(elem);
        })
    }

    reverseRemoveIndex(arr,index){
        this.convertArrToLinkedList(arr);

        if(index < 0 || index > this.size - 1) return null;

        if(index === 0){
            let prev = this.tail.prev;
            prev.next = null;
        }else{
            let prev = null;
            let curr = this.tail;

            for(let i = 0; i < index; i++){
                prev = curr;
                curr = curr.prev;
            }       

            if(curr.prev){
                curr.prev.next = prev;
                prev.prev = curr.prev;
            }else{
                this.head = prev;
                this.head.prev = null;
            }
            this.size--;
        }
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

const list = new LinkedList();
console.log(list.reverseRemoveIndex([1,2,3,4,5],2));
