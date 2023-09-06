//Stack - LIFO
const LinkedList = require('./Linked_list_tail');

class LinkedListStack{
    constructor(){
        this.list = new LinkedList();
    }

    push(value){
        return this.list.prepend(value);
    }

    pop(){
        return this.list.removeFromFront();
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


const list=new LinkedListStack();
list.push(3)
list.push(4)
console.log(list.peek())
// list.pop()
console.log('size ',list.getSize())
console.log(list.isEmpty());
list.print();
