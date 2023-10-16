
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class IfCycle{
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

    ifCycle(arr){
        this.convertKarratToLinkedList(arr);
        let first = this.head;

        while(first){
            let second = first.next;

            while(second){

                if(first.value > second.value){
                    let secondVal = second.value;
                    second.value = first.value;
                    first.value = secondVal;
                }
                second = second.next;
            }
            first = first.next;
        }
        return this.print();
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
    }
}

const list = new IfCycle();
list.ifCycle([1,5,4,-2,-4]);
