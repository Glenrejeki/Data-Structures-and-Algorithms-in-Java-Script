class Node {
    constructor(value){
        this.head = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor(value){
        this.head = new Node (value)
        this.tail = this.head
        this.length = 1
    }
    push(value){
        let newNode = new Node (value)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    pop(value){


        if(!this.head){
            return undefined; // jika linked list kosong
        }

        let temp = this.head; // untuk menghapus node yang terkahir
        let prev = this.head ; // untuk menampilkan node terakhir setelah dihapus
        for(;temp.next;){
            prev = temp;
            temp  = prev.next;
        }
        this.tail = prev
        this .tail.next = null;

        if(this.length === 0 ){
            this.head == null;
            this.tail == null;
        }

        return temp;
    }
}


const myLinkedList = new Linkedlist (1)
myLinkedList.push(10)
myLinkedList.pop()
console.log(myLinkedList)