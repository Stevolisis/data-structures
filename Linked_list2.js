// prepend
// append
// removeFrom
// removeValue
// insert
// search 
// reverse
// isEmpty
// getSize
// print

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
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

    preprend(elem){
        let node = new Node(elem);

        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    append(elem){
        let node = new Node(elem);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            let prev = null;
            
            while(curr){
                prev = curr;
                curr = curr.next;
            }

            prev.next = node;
        }

        this.size++;
    }

    insert(elem,index){
        if(index > this.getSize() || index < 0) return null;

        if(index === 0){
            this.preprend(elem);
        }else{
            let node  = new Node(elem);
            let curr = this.head;
            let prev = null;
    
            for(let i = 0; i < index; i++){
                prev = curr;
                curr = curr.next
            }
    
            node.next = prev.next;
            prev.next = node;
        }
        this.size++
    }

    removeFrom(index){
        if(index > this.getSize() || index < 0) return null;
        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        let prev = null;
        
        for(let i = 0; i < index; i++){
            prev = curr;
            curr = curr.next
        }

        prev.next = curr.next;
        this.size--;
    }

    removeValue(value){
        if(this.isEmpty()) return null;

        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return;
        }

        let curr = this.head.next;
        let prev = this.head;

        while(curr && curr.value !== value){
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        this.size--;
    }

    search(value){
        if(this.isEmpty()) return null;
        let index = 0;
        let curr = this.head;

        while(curr && curr.value !== value){
            curr = curr.next;
            index ++;
        }

        if(curr && curr.value === value){
            return index;
        }else{
            return 'not Found';
        }
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        // let next = curr.next;

        while(curr){
            let next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;
        }
        console.log(this.head);
        this.head = prev;
        console.log(this.head);
    }

    print(){
        if(!this.isEmpty()){
            let curr = this.head;
            let listValues = '';

            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }

            console.log('list: ',listValues);
        }else{
            console.log('List is Empty');
        }
    }
}

const list = new LinkedList();
list.preprend(1);
list.preprend(2);
list.preprend(3);
list.append(4);
list.append(5);
// list.insert(6,2);
list.print();
// list.removeValue(6);
list.reverse();
list.print();
// console.log('search :',list.search(2))
// console.log(list.getSize());
