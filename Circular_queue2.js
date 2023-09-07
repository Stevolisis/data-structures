

class CirclularQueue{
    constructor(capacity){
        this.items= new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.capacity = capacity;
        this.currentLength = 0;
    }

    size(){
        return this.currentLength;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    enqueue(elem){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear]=elem;
            this.currentLength += 1;

            if(this.front === -1){
                this.front= this.rear;
            }
            
        }else{
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear]=elem;
        }
    }

    dequeue(){
        if(this.isEmpty()) return null;
        this.items[this.front]=null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;

        if(this.isEmpty()){
            this.front= -1;
            this.rear= -1;
        }
    }

    peek(){
        if(this.isEmpty) return null;
        return this.items[0];
    }

    print(){
        console.log(this.items.toString());
    }
}

const queue= new CirclularQueue(6);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
// queue.enqueue(8);
// queue.enqueue(9);
// queue.enqueue(10);
// queue.dequeue();
queue.enqueue(6);
queue.enqueue(8);
queue.enqueue(8);

queue.print();
console.log(queue.size());
// console.log(queue.isFull());