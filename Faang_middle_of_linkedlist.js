
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MiddleLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(elem){
        const node = new Node(elem);
        
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

        this.size++;
    }

    convertKarratToLinkedList(arr){
        if(arr.length === 0) return [];

        arr.map(elem=>{
            this.append(elem);
        });
    }

    middleList(arr){
        this.convertKarratToLinkedList(arr);
        let prev = null;
        let curr = this.head;
        
        for (let i = 0; i < parseInt(this.size/2); i++) {
            const element = this.head;
            prev = curr;
            curr = curr.next;
        }

        return curr;
    }

    print(){
        let listValues = [];
        if(this.isEmpty()){
            listValues = [];
        }else{
            let prev = null;
            let curr = this.head;

            while(curr){
                prev = curr;
                curr = curr.next;
                listValues.push(prev.value);
            }
        }
        console.log(listValues,this.size);
    }
}

const list = new MiddleLinkedList();

console.log('Result: ',list.middleList([1,4,5,1,3,4,2,6]));
list.print();