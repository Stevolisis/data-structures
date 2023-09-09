
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

    merge(arr1,arr2){
        if(arr1.length === 0) return null;
        arr1.map(elem=>{
            this.append(elem);
        });
        arr2.map(elem=>{
            this.append(elem);
        });
    }

    mergeSort(arr1,arr2){
        this.merge(arr1,arr2);

        if(this.size <= 1) return this.convertLinkedListToArr();
        let first = this.head;
        
        while(first){
            let second = first.next;

            while(second){
                // console.log('first: ',first.value)
                // console.log('second: ',second.value)
                // console.log(first.value > second.value);

                if(first.value > second.value){
                    let seconded = first.value;
                    first.value = second.value;
                    second.value = seconded;
                } 
                second = second.next;
            }
            first = first.next;
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
