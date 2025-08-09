class Node { // membuat objek 1 elemen dari linked list
    constructor (value){ // fungsi khusus supaya bisa dijalankan saat membuat objek instatniasi
        this.head = value ;
        this.next = null;
    }
}

class Linkedlist { // membuat objek linked list, dimana kumpulan dari objek Node
    constructor (value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
}


const myLinkedList = new Linkedlist(1) // instantiasi objek linked list dengan nilai awal 1
console.log(myLinkedList)