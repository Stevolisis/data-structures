class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const node = new Node(value);
        if(this.root){
            this.insertNewNode(this.root,node);
        }else{
            this.root = node;
        }
    }

    insertNewNode(root,newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode;
            }else{
                this.insertNewNode(root.left,newNode);
            }
        }else{
            if(!root.right){
                root.right = newNode;
            }else{
                this.insertNewNode(root.right,newNode);
            }
        }
    }
}