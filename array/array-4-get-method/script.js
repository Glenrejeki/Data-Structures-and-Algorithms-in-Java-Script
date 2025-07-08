class myAraay{
  constructor(){
    this.length= 0 
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
  
}

const myNewArray = new myAraay()

myNewArray.push(`apple`)
myNewArray.push(`orange`)
myNewArray.push(`manggo`)

console.log(myNewArray.get(0))
console.log(myNewArray.get(2))