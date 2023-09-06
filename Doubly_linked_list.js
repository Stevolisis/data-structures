
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Double_linked_list{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        const node= new Node(value);

        if(this.isEmpty()){
            this.head= node;
            this.tail= node;
        }else{
            this.head.prev=node;
            node.next=this.head;
            node.prev=null;
            this.head=node;
        }

        this.size++
    }

    append(value){
        const node= new Node(value);

        if(this.isEmpty()){
            this.head= node;
            this.tail= node;
        }else{
            this.tail.next=node;
            node.prev=this.tail;
            node.next=null;
            this.tail=node;
        }   
        this.size++
    }

    removeFromFront(){
        const val=this.head;

        if(this.isEmpty()){
            return null
        }

        if(this.size === 1){
            this.head=null;
            this.tail=null
        }else{
            const second = this.head.next;
            this.head=second;
            this.head.prev = null;
        }
        
        this.size--
        return val;
    }

    removeFromEnd(){
        const val=this.tail;

        if(this.isEmpty()){
            return null
        }

        if(this.size === 1){
            this.head=null;
            this.tail=null
        }else{
            const previous = this.tail.prev;
            this.tail=previous;
            this.tail.next = null;
        }
        
        this.size--
        return val;
    }

    getSize(){
        return this.size;
    }

    print(){
        let curr=this.head;
        let listValues= '';

        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
        }

        console.log(listValues);
    }

    printReverse(){
        let curr=this.tail;
        let listValues= '';

        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.prev;
            }
        }

        console.log(listValues);
    }
}

const list= new Double_linked_list();

list.prepend(5);
list.prepend(4);
list.prepend(3);
list.prepend(2);
list.prepend(1);
list.append(6);
list.append(7);
console.log(list.getSize());
console.log(list.isEmpty());
list.removeFromEnd();
list.removeFromFront();
list.print();
list.printReverse();