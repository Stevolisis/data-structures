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

    //    10    
    //  5    15  
    //3   7    
    //pre,in and postOrder are Depth first search 

    preOrder(root){
        if(root){
            console.log(root);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }else{
            console.log('null')
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root)
            this.inOrder(root.right);
        }else{
            console.log('null')
        }
    }
    
    //    10    
    //  5    15  
    //3   7  

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root);
        }else{
            console.log('null');
        }
    }

    //Breadth first search
    levelOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            const curr = queue.shift();
            console.log(curr);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value);
    }

    deleteNode(root,value){
        if(!root){
            return root;
        }
        if(root.value > value){
            root.left = this.deleteNode(root.left,value);
        }else if(root.value < value){
            root.right = this.deleteNode(root.right,value);
        }else{
            //leafNode
            if(!root.left&&!root.right){
                return null;
            }
            //no left child
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            //now it means it has two node, then replace with its successor from the right
            root.value = this.min(root.right);
            //now delete the node at right
            root.right = this.deleteNode(root.right,root.value);
        }
        return root;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
// console.log(tree.search(tree.root,15));
// console.log(tree.preOrder(tree.root));
// console.log(tree.inOrder(tree.root));
// console.log(tree.postOrder(tree.root));
// console.log(tree.min(tree.root));
// console.log(tree.max(tree.root));
tree.levelOrder();
