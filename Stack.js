//LIFO 

class Stack{
    constructor(){
        this.item=[];
    }

    push(elem){
        this.item.push(elem);
    }

    pop(){
        this.item.pop();
    }

    peek(){
        return this.item[this.item.length-1];
    }

    isEmpty(){
        return this.item.length === 0;
    }

    size(){
        return this.item.length;
    }

    print(){
        console.log(this.item.toString());
    }
}