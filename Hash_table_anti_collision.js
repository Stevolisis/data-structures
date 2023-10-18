
class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        let index = this.hash(key);

        if(this.table[index]){
            const checkKey = this.table[index].find(item=>item[0]===key);
            if(checkKey){
                checkKey[1]=value;
            }else{
                this.table[index].push([key,value]);
            }
        }else{
            this.table[index] = [[key,value]];
        }
    }

    get(key){
        let index = this.hash(key);
        if(this.table[index]){
            const checkKey = this.table[index].find(item=>item[0]===key);
            if(checkKey){
                return checkKey[1];
            }
        }
        return undefined;
    }

    remove(key){
        let index = this.hash(key);
        if(this.table[index]){
            const checkKey = this.table[index].find(item=>item[0]===key);
            if(checkKey){
                this.table[index].splice(this.table[index].indexOf(checkKey),1);
            }
        }
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[[i]]){
                console.log(i,this.table[i]);
            }
        }
    }
}


const table = new HashTable(50);
table.set('name','Bruce');
table.set('mane','Juice');
table.set('age',25);
table.set('ega',30);
table.remove('ega');
table.remove('age');
table.display();
// console.log(table.get('ega'));
// table.remove('age');
// table.display();