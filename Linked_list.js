
class Node{
    constructor(value){
        this.value= value;
        this.next= null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);

        // if(this.isEmpty()){
        //     this.head= node;
        // }else{
        //     node.next=this.head;
        //     this.head=node;
        // }

        if(!this.isEmpty()){
            node.next=this.head;
        }
        this.head=node;
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head= node;
        }else{
            let prev= this.head;

            // for(let i=0; i < this.getSize()-1; i++){
            //     prev = prev.next;
            // }
            while(prev.next){
                prev = prev.next;
            }

            prev.next=node;
        }
        this.size++
    }

    insert(value, index){
    
        if(index < 0 || index > this.getSize()){
            return;
        }
        if(index === 0){
            this.prepend(value);
            return;
        }else{
            const node=new Node(value);
            let prev=this.head;
            for(let i = 0; i < index-1; i++){
                prev=prev.next
            }
            node.next=prev.next;
            prev.next=node;
            this.size ++
        }
        
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let curr=this.head;
            let listValues='';

            while(curr){
                listValues += `${curr.value}`;
                curr = curr.next;
            }
            console.log(listValues);
        }
        return
    }
}

const list=new LinkedList();
list.prepend(3)
list.prepend(4)
list.prepend(5)
list.append(2)
list.append(1)
// console.log(list.getSize())
console.log(list.isEmpty());
list.insert(9,2)
list.print();
