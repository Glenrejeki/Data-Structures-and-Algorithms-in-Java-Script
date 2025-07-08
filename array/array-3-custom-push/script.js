class myAraay {
  constructor (){
    this.length = 0 
    this.data= []
  }


  push(item){
    this.data[this.length]= item
    // console.log(`----`, this.data[this.length])
    this.length++
    return this.length
  }
}


// const myNewArray = new myAraay()
// console.log(myNewArray.push(`apple`)) 
const myNewArray = new myAraay()
myNewArray.push(`apple`)
myNewArray.push(`orange`) 
myNewArray.push(`manggo`) 
console.log(myNewArray)