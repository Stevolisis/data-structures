const lists = [[1,4,5],[1,3,4],[2,6]];
console.log(lists.flat());

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MergeKsorted{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(elem){
        const node = new Node(elem);
        
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

        this.size++;
    }

    convertKarratToLinkedList(arr){

    }
}