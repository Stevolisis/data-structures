//LIFO 

class Stack{
    constructor(){
        this.items=[];
    }

    push(elem){
        this.items.push(elem);
    }

    pop(){
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
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


const stack=new Stack();

console.log(stack.isEmpty());
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.size());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());