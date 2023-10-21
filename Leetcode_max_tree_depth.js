
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
        console.log('new: ',newNode)

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
                console.log('mmmmmmmmmmm: ',elem)
                this.insert(elem);                
            }
        });
    }

    findMaxDepth(arr){
        this.convertArrToTree(arr);
        this.display(this.root)
    }

    display(root){
        if(!this.root){
            console.log('Null');
            // return undefined;
        }else{
            console.log(root);
            this.display(root.left);
            this.display(root.right);
        }
    }
}


const tree = new MaxDepth();
tree.findMaxDepth([3,9,20,null,null,15,7]);
