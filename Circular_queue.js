
class CirclularQueue{
    constructor(capacity){
        this.items=new Array(capacity);
        this.capacity= capacity;
        this.currentLength= 0;
        this.rear= -1;
        this.front= -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    enqueue(elem){
        if(!this.isFull()){
            this.rear= (this.rear + 1) % this.capacity;
            this.items[this.rear]= elem;
            this.currentLength  += 1;

            if(this.front === -1){
                this.front= this.rear;
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const item= this.items[this.front];
        this.items[this.front] = null;
        this.front= (this.front + 1) % this.capacity;
        this.currentLength += 1;

        if(this.isEmpty()){
            this.front= -1;
            this.rear= -1;
        }

        return item;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        return null;
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
        }else{
            let i;
            let str= '';
            
            for(i = this.front; i !== this.rear; i = (i += 1) % this.capacity){
                str += this.items[i] + ' ';
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

const queue= new CirclularQueue(6);

console.log(queue.isEmpty());
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.peek());
console.log(queue.isFull());