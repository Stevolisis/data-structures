
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MergeKsorted{
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
        let flatArr = arr.flat();

        flatArr.map(elem=>{
            this.append(elem);
        });
    }

    kSort(arr){
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
        return listValues;
    }
}

const list = new MergeKsorted();

console.log(list.kSort([[1,4,5],[1,3,4],[2,6]]))