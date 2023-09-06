//Queue - FIFO
const LinkedList = require('./Linked_list_tail');

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        return this.list.append(value);
    }

    dequeue(){
        return this.list.removeFromEnd();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
         return this.list.getSize();
    }

    print(){
        return this.list.print();
    }
}


const list=new LinkedListQueue();
list.enqueue(3)
list.enqueue(4)
console.log(list.peek())
// list.dequeue()
console.log('size ',list.getSize())
console.log(list.isEmpty());
list.print();
