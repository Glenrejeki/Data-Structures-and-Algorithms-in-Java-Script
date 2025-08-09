class Node{
    constructor(value){
        this.head = value;
        this.next = null
    }
}

class Linkedlist {
    constructor (value){
        this.head = new Node (value);
        this.tail = this.head
        this.length = 1;
    }
    push(value){ // menambahkan eleme baru di akhir linked list
        let newNode = new Node (value);

        if(!this.head){ // kalau linked list masih kosong
            this.head =newNode;
            this.tail = newNode;
        }

        this.tail.next =newNode;
        this.tail = newNode;
        this.length++;
    }
}


const myLinkedList = new Linkedlist(1) // instattiasi = variabel dimana bisa kita pakai si classnya 
myLinkedList.push(10)
console.log(myLinkedList)