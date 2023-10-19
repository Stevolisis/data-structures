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

    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return true
            }else if(root.value > value){
                return this.search(root.left,value);
            }else{
                return this.search(root.right,value);
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
console.log(tree.search(tree.root,15));