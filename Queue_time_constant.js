
class Queue{
    constructor(){
        this.items={};
        this.front=0;
        this.rear=0;
    }

    enqueue(elem){
        this.items[this.rear]=elem;
        this.rear++
    }

    dequeue(){
        const item= this.items[this.front];
        delete this.items[this.front];
        this.front++
        return item;
    }

    isEmpty(){
        return this.rear - this.front === 0;
        // return Object.keys(this.items).length===0;
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
        // return Object.keys(this.items).length
    }

    print(){
        console.log(this.items);
    }
}


const queue=new Queue();
console.log(queue.isEmpty());
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.peek());
console.log(queue.size());
