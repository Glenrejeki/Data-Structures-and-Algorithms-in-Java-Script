const groceries = ['milk','bread','eggs','flour','cheese','sugar']

const searchForItem = (item)=> {
  for(let i =0; i<groceries.length; i++){
    if(groceries[i]===item){
      console.log(`Found ${item} at index ${i} `)
      break
    }
  }

  for(let j =0; j<groceries.length; j++){
    if(groceries[i]===item){
      console.log(`Found ${item} at index ${i} `)
      break
    }
  }

  // n + n = 2n 
  // O(n) + O(n) = O(2n) = O(n)
  // O(n) + O(n) = O(n)
}


searchForItem('sugar')