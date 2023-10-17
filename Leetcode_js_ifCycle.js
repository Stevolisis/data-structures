//Rabbit Tortoise (Floyd's) Method

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class IfCycle{

    ifCycle(head){
        if (!head || !head.next) {
            return false;
        }

        let fast = head;
        let slow = head;

        while(fast&&fast.next){
            fast = fast.next.next;
            slow = slow.next;
            console.log(fast,slow);
            if(fast === slow){
                return true;
            }
        }
        return false;
    }
}

const head = new Node(3);
const node1 = new Node(2);
const node2 = new Node(0);
const node3 = new Node(-4);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node1;

const list = new IfCycle();
console.log(list.ifCycle(head));