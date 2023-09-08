
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MergeSorted{
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

        this.size++
    }

    convertArrToLinkedList(arr){
        if(arr.length === 0) return null;
        arr.map(elem=>{
            this.append(elem);
        })
    }

    mergeSort(arr1,arr2){
        this.convertArrToLinkedList(arr1.concat(arr2));
        let prev = 0;
        let curr = this.head;

        while(curr){
            if(prev > curr){
                let next = curr.next;
                prev.next = next;
                curr.next = prev;
            }else{
                prev = curr;
                curr = curr.next;
            }
            console.log('prev: ',prev);
            console.log('curr: ',curr);
        }
        return this.convertLinkedListToArr();
    }

    convertLinkedListToArr(){
        let reversed_arr = [];
        let curr = this.head;
        
        while(curr){
            reversed_arr.push(curr.value);
            curr = curr.next;
        }

        return reversed_arr;
    }
}

const list = new MergeSorted();
console.log(list.mergeSort([1,2,4],[1,3,4]));
