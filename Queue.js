//FIFO

class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(elem){
        this.items.push(elem);
    }

    dequeue(){
        this.items.shift();
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}

const queue=new Queue;

console.log(queue.isEmpty());
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.peek());
console.log(queue.size());

