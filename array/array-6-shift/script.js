class myAraay{
  

  constructor(){
    this.length = 0
    this.data = []

  }

  push(item){
    this.data[this.length] = item
    this.length++
    return this.length
  }

  get(index){
    return this.data[index]
  }

  pop(){
    const lastItem = this.data[this.length  - 1]
    delete this.data[this.length - 1]
    return lastItem
  }


  shift(){
    const firstItem = this.data[0]

    for(let i =0 ; i< this.length ; i++){
      this.data[i] = this.data[i+1]
    }

    delete this.data[this.length - 1]
    this.length--

    return firstItem
  }

}


const myNewArray =  new myAraay()

myNewArray.push(`apple`)
myNewArray.push(`orange`)
myNewArray.push(`manggo`)



console.log(myNewArray)
console.log(myNewArray.shift())
console.log(myNewArray)