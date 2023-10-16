
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

    append(elem){
        let node = new Node(elem);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = null;
            let curr = this.head;

            while(curr){
                prev = curr;
                curr = curr.next;
            }

            prev.next = node;
        }

        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('List Is Empty!!!')
        }else{
            let prev = null;
            let curr = this.head;
            let ListValues = ''

            while(curr){
                prev = curr;
                ListValues += `${curr.value} `;
                curr = curr.next;
            }

            console.log('List: ',ListValues);
        }
    }
}


const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.print();
