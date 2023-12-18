
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class MaxDepth{
    constructor(){
        this.root = null;
        this.leftDepth = [];
        this.rightDepth = [];
    }

    isEmpty(){
        return this.root = null;
    }

    insert(value){
        const node = new Node(value);

        if(this.root){
            this.insertNode(this.root,node);
        }else{
            this.root = node;
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left){
                return this.insertNode(root.left,newNode);
            }else{
                root.left = newNode;
            }
        }else{
            if(!root.right){
                root.right = newNode;
            }else{
                return this.insertNode(root.right,newNode);
            }
        }
    }

    convertArrToTree(arr){
        arr.forEach(elem => {
            if(elem!==null){
                this.insert(elem);                
            }
        });
    }

    findMaxDepth(root){
        if(!root){
            return undefined;
        }else{
            if(root.left){
                console.log('leeeeeft',root.value);
                this.leftDepth.push(root.value);
                this.findMaxDepth(root.left);
            }
            
            if(root.right){
                console.log('rigggght',root.value);
                this.rightDepth.push(root.value);
                this.findMaxDepth(root.right);
            }
        }

        console.log(this.leftDepth.length," : ",this.rightDepth.length);
    }

    display(root){
        if(!root){
            // console.log('Null');
            return undefined;
        }else{
            console.log(root);
            this.display(root.left);
            this.display(root.right);
        }
    }
}


const tree = new MaxDepth();
tree.convertArrToTree([3,9,20,null,null,15,7]);
tree.findMaxDepth(tree.root);
//        3
//              9
//           7      20
//                15
